export const CardVariant = {
    "1x2": "1x2",
    "1x4": "1x4",
    "2x2": "2x2",
    "2x4": "2x4",
    "3x2": "3x2",
} as const;

type CardVariants = keyof typeof CardVariant;

export const CardVariantClass: Record<CardVariants, string> = {
    "1x2": "col-span-2 row-span-1",
    "1x4": "col-span-4 row-span-1",
    "2x2": "col-span-2 row-span-2",
    "2x4": "col-span-4 row-span-2",
    "3x2": "col-span-2 row-span-3",
};
