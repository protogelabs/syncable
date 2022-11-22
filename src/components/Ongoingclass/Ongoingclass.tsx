import style from './Ongoingclass.module.scss'

export const Ongoingclass:React.FC = () =>{
    return (
        <div className={style.container}>
            <section className={style.recentclass}>
                <div className={style.line}></div>
                <div className={style.info}>
                    <p>ongoing class</p>
                    <h6>Sen 201</h6>
                    <p> Intro. to Web Tech - C129</p>
                </div>
            </section>
        </div>
    )
}
