import { useEffect, useState, useRef, RefObject } from 'react'

interface ObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean
}

function useAnimateOnScroll<T extends HTMLElement>(options?: ObserverOptions): [RefObject<T>, boolean] {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<T>(null) as RefObject<T>

  const {
    threshold = 0.1, // Trigger when 10% of the element is visible
    root = null,
    rootMargin = '0px',
    triggerOnce = true, // Default to triggering the animation only once
  } = options || {} // Provide default options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is intersecting
        if (entry.isIntersecting) {
          setIsVisible(true)
          // If triggerOnce is true, unobserve after triggering
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else {
          // Optional: If you want the animation to reverse when scrolling out
          if (!triggerOnce) {
            setIsVisible(false)
          }
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    )

    observer.observe(element)

    // Cleanup function
    return () => {
      if (element) {
        observer.unobserve(element)
      }
      // Disconnect observer (important if root is not null)
      // observer.disconnect(); // Might be needed depending on usage
    }
    // Re-run effect if options change (though typically stable)
  }, [elementRef, threshold, root, rootMargin, triggerOnce])

  return [elementRef, isVisible]
}

export default useAnimateOnScroll
