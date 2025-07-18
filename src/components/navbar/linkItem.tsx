interface LinkItemProps {
    keyRef: string
    text: string
}

const LinkItem = (props: LinkItemProps) => {
    return (
        <li className="bg-amber-300 px-[1.5rem] flex items-center rounded-md font-medium hover:bg-amber-200">
            <a href={props.keyRef}>{props.text}</a>
        </li>
    );
};

export default LinkItem;