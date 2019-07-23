
import * as React from 'react';
export class Footer extends React.Component {     
    render() {
        return (
            
            <footer>                
                <div className="footer-column">
                    <a href="https://www.facebook.com">Facebook</a>
                    <a href="https://www.linkedin.com/">Linkedin</a>
                    <a href="https://twitter.com/">Twitter</a>
                </div>
                <div className="footer-column">
                    <a href="https://github.com/">Github</a>
                    <a href="https://plus.google.com/discover">Google+</a>
                    <a href="https://www.pinterest.ru/">Pinterest</a>
                </div>
                <div className="footer-column">
                    <a href="https://www.youtube.com/">Youtube</a>
                    <a href="https://play.google.com/store">Google Play</a>
                    <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox">Gmail</a>
                </div>
            </footer>           
        )      
    }
}