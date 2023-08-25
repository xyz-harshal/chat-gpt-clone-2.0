import "./styles.css";
let HomeBottom = () => {
    return (
        <div className="body-btm-bar">
            <div className="bottom-bar">
                <textarea placeholder="Send a message." />
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke-width="2" height="16px" width="16px"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg></button>
            </div>
            <div className="body-btm-bar-text">
                Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 3 Version
            </div>
        </div>
    )
}
export default HomeBottom;