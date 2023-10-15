import '../styles/globals.css';

type monBandeauProps = {
    titre: string;
    description: string;
    couleur: string;
};

export default function Bandeau({
    titre,
    description,
    couleur,
}: monBandeauProps) {
    return (
        <div className={`mt-6 h-48 ${couleur}`}>
            <h1 className='text-center font-title pt-6 text-6xl after:block after:mx-auto after:w-16 after:pt-3 after:border-b-4 after:rounded after:border-white'>
                {titre}
            </h1>
            <p className='text-center font-tertiary text-2xl mt-6'>
                {description}
            </p>
        </div>
    );
}
