

const useColorizeText = (styles) => {

    const colorize = (activeText) => {

        const texts = styles.map((item)=>item?.[0])
        const index = texts?.indexOf(activeText)
        
        return (
            <span className={styles[index]?.[1] ?? 'text-inherit'}>
                {`${activeText}`}
            </span>
        );
    }
    return colorize
};

export default useColorizeText;