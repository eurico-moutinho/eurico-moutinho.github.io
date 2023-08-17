const Template = ({ dataList }) => {

    return(
        <div>
            <h1 id='projectTitle' className='my50'>Projects</h1>

            <section className="cardList justify-content-center pb-xsm50">
            {dataList.map( (e, index) => {

                return (

                <fieldset key={index} className="card p10 flex flex-column align-items-center">
                    <legend>{ e.title } <span>({ e.year })</span></legend>
                    <img src={ e.image } alt="projectPreview"/>
                    <div className='icons my10'>{ e.languages.map((language, i) => {

                    return <i key={i} className={`${language.class} fa-lg`} title={language.title}></i>

                    })}</div>
                    <p>{ e.with }</p>
                    <p>{ e.description }</p>
                    <div className='links my10 flex justify-content-evenly'>
                    <a target='_blank' rel="noreferrer" href={ e.deployLink } className='py5'>Page</a>
                    <a target='_blank' rel="noreferrer" href={ e.githubLink} className='py5'>GitHub</a>
                    </div>
                </fieldset>

                )

            })}
            </section>
        </div>
    )

}

export default Template;