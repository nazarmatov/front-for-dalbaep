import { useEffect } from 'react';
import '../styles/PrivacyPolicy.css';

function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);

    return (
        <div className="privacy_page">
            <div className="privacy_overlay"></div>

            <nav className="privacy_nav">
                <a href="/" className="privacy_back_link">
                    <span className="privacy_back_arrow">&#8592;</span>
                    <span>Back to site</span>
                </a>
            </nav>

            <div className="privacy_container">
                <header className="privacy_header">
                    <span className="privacy_eyebrow">Legal</span>
                    <h1 className="privacy_title">Privacy Policy</h1>
                    <div className="privacy_divider"></div>
                    <p className="privacy_updated">Last updated: 22.10.2024</p>
                </header>

                <div className="privacy_body">
                    <p>
                        This Privacy Policy governs all information that the online store
                        "Tiny Bunny Зайчик" may collect from the User while using the
                        website <a href="https://tinybunnyhorror.com/" target="_blank" rel="noopener noreferrer">tinybunnyhorror.com</a>.
                    </p>

                    <section className="privacy_section">
                        <h2 className="privacy_section_title">1. Definition of Terms</h2>
                        <p>
                            <strong>1.1.1. "Site Administration"</strong> — authorized personnel
                            managing the Site, acting on behalf of Individual Entrepreneur
                            Startsev A.Y. (producer and project lead; alias Saikono), who organize
                            and/or carry out the processing of personal data, and determine the
                            purposes of processing, the composition of personal data subject to
                            processing, and the actions (operations) performed with personal data.
                        </p>
                        <p>
                            <strong>1.1.2. "Personal data"</strong> — any information relating to a
                            directly or indirectly identified or identifiable natural person (subject
                            of personal data).
                        </p>
                        <p>
                            <strong>1.1.3. "Processing of personal data"</strong> — any action
                            (operation) or set of actions (operations) performed with or without the
                            use of automation tools on personal data, including collection,
                            recording, systematization, accumulation, storage, clarification
                            (updating, modification), extraction, use, transfer (distribution,
                            provision, access), depersonalization, blocking, deletion, and
                            destruction of personal data.
                        </p>
                        <p>
                            <strong>1.1.4. "Confidentiality of personal data"</strong> — a mandatory
                            requirement for the Operator or any other person who has gained access
                            to personal data to prevent its disclosure without the consent of the
                            subject of personal data or any other legal basis.
                        </p>
                        <p>
                            <strong>1.1.5. "User of the Site"</strong> — a person who has access to
                            the Site via the Internet and uses the Site.
                        </p>
                        <p>
                            <strong>1.1.6. "IP address"</strong> — a unique network address of a node
                            in a computer network built on the IP protocol.
                        </p>
                        <p>
                            <strong>1.1.7. "Cookies"</strong> — a small piece of data sent by a web
                            server and stored on the user's computer, which the web client or web
                            browser resends to the web server in an HTTP request each time it
                            attempts to open a page of the corresponding site.
                        </p>
                    </section>

                    <section className="privacy_section">
                        <h2 className="privacy_section_title">2. General Provisions</h2>
                        <p>
                            By using the Site, the User agrees to this Privacy Policy and the terms
                            of processing of their personal data. The User is informed and agrees
                            that consent given electronically on the website fully meets the
                            requirements of personal data legislation and confirms the fact of its
                            receipt.
                        </p>
                        <p>
                            If the User disagrees with the terms of the Privacy Policy, they must
                            stop using the Site. This Privacy Policy applies only to the Site. The
                            Site Administration does not control and is not responsible for
                            third-party sites the User may access through links available on this
                            site.
                        </p>
                        <p>
                            The Site Administration does not verify the accuracy of personal data
                            provided by the User on the Site. By placing an order on the site, the
                            User voluntarily and explicitly accepts the terms of the User Agreement
                            and voluntarily agrees to the processing of their Personal data in
                            accordance with this Privacy Policy.
                        </p>
                    </section>

                    <section className="privacy_section">
                        <h2 className="privacy_section_title">3. Subject of the Privacy Policy</h2>
                        <p>
                            This Privacy Policy establishes the obligations of the Site
                            Administration regarding non-disclosure and ensuring the protection of
                            confidentiality of personal data that the User provides at the request
                            of the Site Administration when placing an order.
                        </p>
                        <p>
                            Personal data permitted for processing under this Privacy Policy is
                            provided by the User by filling out the order form on the Site and
                            includes: the User's first, middle, and last name; the User's contact
                            phone number; email address; and the delivery address for goods.
                        </p>
                        <p>
                            The Site protects data automatically transmitted while browsing pages
                            equipped with a statistical script ("pixel"), including: IP address;
                            cookie information; browser information; access time; and referrer
                            (address of the previous page).
                        </p>
                        <p>
                            Disabling cookies may result in being unable to access parts of the Site
                            that require authorization. The Site collects statistics on visitors' IP
                            addresses. This information is used to identify and resolve technical
                            issues and to monitor the legality of financial payments made.
                        </p>
                        <p>
                            Any other personal information not specified above (purchase history,
                            browsers and operating systems used, etc.) is subject to secure storage
                            and non-disclosure, except in cases provided for in clauses 5.2 and 5.3
                            of this Privacy Policy.
                        </p>
                    </section>

                    <section className="privacy_section">
                        <h2 className="privacy_section_title">4. Purposes of Collecting User Personal Information</h2>
                        <p>The Site Administration may use the User's personal data to:</p>
                        <p>4.1.1. Identify the User who placed an order on the Site.</p>
                        <p>4.1.2. Provide the User with access to personalized resources of the Site.</p>
                        <p>
                            4.1.3. Establish feedback with the User, including sending notifications
                            and requests related to the use of the Site, the provision of services,
                            and the processing of requests and orders from the User.
                        </p>
                        <p>
                            4.1.4. Determine the User's location to ensure security and prevent
                            fraud.
                        </p>
                        <p>
                            4.1.5. Confirm the accuracy and completeness of the personal data
                            provided by the User.
                        </p>
                        <p>
                            4.1.6. Process and receive payments, confirm tax or tax benefits,
                            dispute a payment, and determine the User's eligibility for a line of
                            credit.
                        </p>
                        <p>
                            4.1.7. Provide the User with effective customer and technical support for
                            issues related to using the Site.
                        </p>
                        <p>
                            4.1.8. Provide the User access to the websites or services of the Site's
                            partners in order to receive products, updates, and services.
                        </p>
                    </section>

                    <section className="privacy_section">
                        <h2 className="privacy_section_title">5. Methods and Timeframes for Processing Personal Information</h2>
                        <p>
                            Processing of the User's personal data is carried out without time
                            limitation, by any lawful means, including in personal data information
                            systems with or without the use of automation tools.
                        </p>
                        <p>
                            The User agrees that the Site Administration has the right to transfer
                            personal data to third parties, in particular: courier services; postal
                            organizations; and payment systems, solely for the purpose of fulfilling
                            the User's order placed on the Site.
                        </p>
                        <p>
                            The User's personal data may be transferred to authorized government
                            agencies only on the grounds and in the manner established by law. In
                            the event of loss or disclosure of personal data, the Site Administration
                            shall inform the User accordingly.
                        </p>
                        <p>
                            The Site Administration takes the necessary organizational and technical
                            measures to protect the User's personal information from unauthorized or
                            accidental access, destruction, modification, blocking, copying,
                            distribution, and other unlawful actions by third parties, and works
                            together with the User to prevent losses or other negative consequences
                            caused by the loss or disclosure of personal data.
                        </p>
                    </section>

                    <section className="privacy_section">
                        <h2 className="privacy_section_title">6. Obligations of the Parties</h2>
                        <p>
                            The User is obligated to provide the personal data necessary to place an
                            order on the Site, and to update or supplement this information should
                            it change.
                        </p>
                        <p>
                            The Site Administration is obligated to use the information received
                            solely for the purposes specified in Section 4 of this Privacy Policy; to
                            keep confidential information secret and not disclose it without the
                            User's prior written consent, nor sell, exchange, publish, or otherwise
                            disclose the User's transferred personal data, except as set out in
                            clauses 5.2 and 5.3; to take precautions to protect the confidentiality
                            of the User's personal data in accordance with the procedures normally
                            used to protect this kind of information in existing business practice;
                            and to block personal data relating to the relevant User from the moment
                            of a request from the User, their legal representative, or an authorized
                            body for the protection of the rights of personal data subjects, for the
                            duration of a verification, in case of detection of inaccurate personal
                            data or unlawful actions.
                        </p>
                    </section>

                    <section className="privacy_section">
                        <h2 className="privacy_section_title">7. Liability of the Parties</h2>
                        <p>
                            The Site Administration, having failed to fulfil its obligations, bears
                            liability for losses incurred by the User in connection with unlawful use
                            of personal data, in accordance with the legislation of the Russian
                            Federation, except for the cases provided for in clauses 5.2, 5.3, and
                            7.2 of this Privacy Policy.
                        </p>
                        <p>
                            In the event of loss or disclosure of Confidential Information, the Site
                            Administration bears no liability if such confidential information: became
                            publicly known prior to its loss or disclosure; was obtained from a third
                            party before being received by the Site Administration; or was disclosed
                            with the User's consent.
                        </p>
                        <p>
                            In the event the Site is unavailable, in whole or in part, due to
                            preventive or other technical work ensuring the Site's normal operation,
                            the Site Administration bears no liability to Users for any failure to
                            receive information. The User bears responsibility for any damage that
                            may result from the use of materials obtained while using the Site's
                            services. Responsibility for any problems arising during the User's
                            order placement and use of the Site rests solely with the User; the Site
                            Administration is not liable for any damage or losses to the User
                            resulting from a problem caused by the User's error or negligence while
                            using the Site.
                        </p>
                    </section>

                    <section className="privacy_section">
                        <h2 className="privacy_section_title">8. Dispute Resolution</h2>
                        <p>
                            Prior to filing a lawsuit regarding disputes arising from the relationship
                            between the User and the Site Administration, it is mandatory to first
                            submit a claim (a written proposal for voluntary settlement of the
                            dispute). The recipient of the claim shall, within 30 calendar days of
                            receiving it, notify the claimant in writing of the results of the
                            review. If no agreement is reached, the dispute will be referred to a
                            judicial body in accordance with applicable law. The current legislation
                            applies to this Privacy Policy and to the relationship between the User
                            and the Site Administration.
                        </p>
                    </section>

                    <section className="privacy_section">
                        <h2 className="privacy_section_title">9. Additional Terms</h2>
                        <p>
                            The Site Administration has the right to make changes to this Privacy
                            Policy without the User's consent. The new Privacy Policy takes effect
                            from the moment it is published on the Site, unless otherwise provided by
                            the new version of the Policy. All suggestions or questions regarding
                            this Privacy Policy should be sent to{' '}
                            <a href="mailto:tinybunnyshop@mail.ru">tinybunnyshop@mail.ru</a>.
                            The current Privacy Policy is published on the page at{' '}
                            <a href="https://tinybunnyhorror.com/politika-konfidentsialnosti" target="_blank" rel="noopener noreferrer">
                                tinybunnyhorror.com/politika-konfidentsialnosti
                            </a>.
                        </p>
                    </section>
                </div>

                <footer className="privacy_footer_note">
                    <p>© 2026 Tiny Bunny | Зайчик</p>
                </footer>
            </div>
        </div>
    );
}

export default PrivacyPolicy;