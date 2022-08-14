const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class Footer extends Component {
    render() {
        const {
            logo,
            logoUrl,
            siteUrl,
            siteTitle,
            siteYear,
            author,
            links,
            showVisitorCounter,
            visitorCounterTitle
        } = this.props;

        let footerLogo = '';
        if (logo) {
            if (logo.text) {
                footerLogo = logo.text;
            } else {
                footerLogo = <img src={logoUrl} alt={siteTitle} height="28" />;
            }
        } else {
            footerLogo = siteTitle;
        }

        return <footer class="footer">
            <div class="container">
                <div class="level">
                    <div class="level-start">
                        <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">
                            <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg" alt="CC0 1.0" title="CC0 1.0" />
                        </a><b style="margin-left:0.5em; font-size:20px; font-family:Nimbus Roman, FreeSerif, Times New Roman, Noto Serif, Serif;">DQWYY BLOG</b>
                        <p class="is-size-7" style="margin-top:1ex;">
                            Powered by&nbsp;
                            <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>,&nbsp;
                            <a href="https://hexo.io/" target="_blank" rel="noopener">Hexo</a>,&nbsp;
                            <a href="https://github.com/ppoffice/hexo-theme-icarus" target="_blank" rel="noopener">Icarus</a> and&nbsp;
                            <a href="https://sm.ms/" target="_blank">SM.MS</a>.
                            {showVisitorCounter ? <br /> : null}
                            {showVisitorCounter ? <span id="busuanzi_container_site_uv"
                                dangerouslySetInnerHTML={{ __html: visitorCounterTitle }}></span> : null}
                        </p>
                        <p class="is-size-7" style="text-transform:uppercase;">
                            <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" style="color:#4a4a4a;">CC0 1.0</a> ⓪ 2017-<script>document.write( new Date().getFullYear() );</script> <a href="https://dqwyy.moe" target="_blank" style="color:#4a4a4a;">dqwyy</a>. No right reserved unless otherwise noted.
                        </p>
                    </div>
                    <div class="level-end">
                        {Object.keys(links).length ? <div class="field has-addons">
                            {Object.keys(links).map(name => {
                                const link = links[name];
                                return <p class="control">
                                    <a class={`button is-transparent ${link.icon ? 'is-large' : ''}`} target="_blank" rel="noopener" title={name} href={link.url}>
                                        {link.icon ? <i class={link.icon}></i> : name}
                                    </a>
                                </p>;
                            })}
                        </div> : null}
                    </div>
                </div>
            </div>
        </footer>;
    }
}

module.exports = cacheComponent(Footer, 'common.footer', props => {
    const { config, helper } = props;
    const { url_for, _p, date } = helper;
    const { logo, title, author, footer, plugins } = config;

    const links = {};
    if (footer && footer.links) {
        Object.keys(footer.links).forEach(name => {
            const link = footer.links[name];
            links[name] = {
                url: url_for(typeof link === 'string' ? link : link.url),
                icon: link.icon
            };
        });
    }

    return {
        logo,
        logoUrl: url_for(logo),
        siteUrl: url_for('/'),
        siteTitle: title,
        siteYear: date(new Date(), 'YYYY'),
        author,
        links,
        showVisitorCounter: plugins && plugins.busuanzi === true,
        visitorCounterTitle: _p('plugin.visitor_count', '<span id="busuanzi_value_site_uv">0</span>')
    };
});
