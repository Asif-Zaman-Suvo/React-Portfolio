import React, { Component } from 'react';
export default class Blog extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="blog">

                
                <div className="row blog">
                    <div className="three columns header-col">
                        <h1><span>Blog</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {
                            resumeData.blog && resumeData.blog.map((item) => {
                                return (

                                    <div>
                                       <h3>{item.description}</h3>
                                    </div>
                                    

                                )
                            })
                        }
                    </div>
                </div>


                

            </section>
        );
    }
}