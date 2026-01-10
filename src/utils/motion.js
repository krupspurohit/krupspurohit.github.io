export const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
