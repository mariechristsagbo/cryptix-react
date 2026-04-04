export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const easing = [0.22, 1, 0.36, 1];

export function fadeUp(delay = 0, distance = 28) {
  return {
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: viewportOnce,
    transition: {
      duration: 0.8,
      delay,
      ease: easing,
    },
  };
}

export function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: viewportOnce,
    transition: {
      duration: 0.7,
      delay,
      ease: easing,
    },
  };
}

export function scaleIn(delay = 0, offset = 0.96) {
  return {
    initial: { opacity: 0, scale: offset },
    whileInView: { opacity: 1, scale: 1 },
    viewport: viewportOnce,
    transition: {
      duration: 0.75,
      delay,
      ease: easing,
    },
  };
}

export const staggerContainer = {
  hidden: {},
  show: (delayChildren = 0) => ({
    transition: {
      staggerChildren: 0.12,
      delayChildren,
    },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};
