import React, { Component } from "react"
import MyContext from "./MyContext.js"
import Left from "./Left"
export default class Child extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    obj => {
                        return <div style={{ margin: "25px", width: "85%",height:"300px", background: obj.bg, padding: "35px", color: obj.c }}>
                            <Left />
                            大学之道，在明明德，在亲（qīn）民，在止于至善。知止而后有定，定而后能静，静而后能安，安而后能虑，虑而后能得。物有本末，事有终始，知所先后，则近道矣。
                        　　古之欲明明德于天下者，先治其国；欲治其国者，先齐其家；欲齐其家者，先修其身；欲修其身者，先正其心；欲正其心者，先诚其意；欲诚其意者，先致其知，致知在格物。物格而后知至，知至而后意诚，意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，国治而后天下平。
                        　　自天子以至于庶人，壹是皆以修身为本。其本乱而末治者，否矣；其所厚者薄（bó），而其所薄（bó）者厚，未之有也。此谓知本，此谓知之至也。
                        </div>
                    }
                }
            </MyContext.Consumer>
        )
    }
}