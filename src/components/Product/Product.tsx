interface ProductProps {
    blok: {
        name: string;
    };
}

export const Product = ({ blok }: ProductProps) => {
    return <h1>{blok.name}</h1>;
};
