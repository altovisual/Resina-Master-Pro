import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './AnimatedList.css';

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick, isOpen }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3, triggerOnce: false });
    return (
        <motion.div
            ref={ref}
            data-index={index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, delay: isOpen ? 0 : delay }}
            className={`animated-list-item ${isOpen ? 'is-open' : ''}`}
        >
            {children}
        </motion.div>
    );
};

const AnimatedList = ({
    items = [],
    onItemSelect,
    showGradients = true,
    enableArrowNavigation = true,
    className = '',
    itemClassName = '',
    displayScrollbar = true,
    initialSelectedIndex = -1
}) => {
    const listRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
    const [openIndex, setOpenIndex] = useState(-1);
    const [keyboardNav, setKeyboardNav] = useState(false);
    const [topGradientOpacity, setTopGradientOpacity] = useState(0);
    const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

    const handleItemMouseEnter = useCallback(index => {
        setSelectedIndex(index);
    }, []);

    const handleItemClick = useCallback(
        (item, index) => {
            setSelectedIndex(index);
            setOpenIndex(prev => prev === index ? -1 : index);
            if (onItemSelect) {
                onItemSelect(item, index);
            }
        },
        [onItemSelect]
    );

    const handleScroll = useCallback(e => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        setTopGradientOpacity(Math.min(scrollTop / 50, 1));
        const bottomDistance = scrollHeight - (scrollTop + clientHeight);
        setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
    }, []);

    useEffect(() => {
        if (!enableArrowNavigation) return;
        const handleKeyDown = e => {
            if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
            } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex(prev => Math.max(prev - 1, 0));
            } else if (e.key === 'Enter') {
                if (selectedIndex >= 0 && selectedIndex < items.length) {
                    e.preventDefault();
                    handleItemClick(items[selectedIndex], selectedIndex);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [items, selectedIndex, onItemSelect, enableArrowNavigation, handleItemClick]);

    useEffect(() => {
        if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
        const container = listRef.current;
        const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
        if (selectedItem) {
            const extraMargin = 50;
            const containerScrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const itemTop = selectedItem.offsetTop;
            const itemBottom = itemTop + selectedItem.offsetHeight;
            if (itemTop < containerScrollTop + extraMargin) {
                container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
            } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
                container.scrollTo({
                    top: itemBottom - containerHeight + extraMargin,
                    behavior: 'smooth'
                });
            }
        }
        setKeyboardNav(false);
    }, [selectedIndex, keyboardNav]);

    return (
        <div className={`scroll-list-container ${className}`}>
            <div ref={listRef} className={`scroll-list ${!displayScrollbar ? 'no-scrollbar' : ''}`} onScroll={handleScroll} data-lenis-prevent>
                {items.map((item, index) => {
                    const isItemObject = typeof item === 'object';
                    const title = isItemObject ? item.title : item;
                    const content = isItemObject ? item.content : null;
                    const isOpen = openIndex === index;

                    return (
                        <AnimatedItem
                            key={index}
                            delay={0.1}
                            index={index}
                            isOpen={isOpen}
                            onMouseEnter={() => handleItemMouseEnter(index)}
                            onClick={() => handleItemClick(item, index)}
                        >
                            <div className={`item ${selectedIndex === index ? 'selected' : ''} ${isOpen ? 'active' : ''} ${itemClassName}`}>
                                <div className="flex items-center justify-between">
                                    <p className="item-text">{title}</p>
                                    {content && (
                                        <motion.span
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            className="text-primary/50 text-xs"
                                        >
                                            ▼
                                        </motion.span>
                                    )}
                                </div>

                                <AnimatePresence>
                                    {isOpen && content && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="item-content pt-4 mt-4 border-t border-primary/10">
                                                {Array.isArray(content) ? (
                                                    <ul className="space-y-3">
                                                        {content.map((c, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ x: -10, opacity: 0 }}
                                                                animate={{ x: 0, opacity: 1 }}
                                                                transition={{ delay: idx * 0.05 }}
                                                                className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                                                            >
                                                                <span className="mt-1.5 w-1.5 h-1.5 bg-primary/40 rounded-full shrink-0" />
                                                                {c}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-gray-400 text-sm leading-relaxed">{content}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </AnimatedItem>
                    );
                })}
            </div>
            {showGradients && (
                <>
                    <div className="top-gradient" style={{ opacity: topGradientOpacity }}></div>
                    <div className="bottom-gradient" style={{ opacity: bottomGradientOpacity }}></div>
                </>
            )}
        </div>
    );
};

export default AnimatedList;
