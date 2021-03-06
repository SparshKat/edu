import React from 'react';
import { Button, Modal,Container } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/custom.scss"
function BlogPage() {
    return (
        <Container>
            <h2>Blog</h2>
            <Modal.Dialog className="blog" size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title> प्रस्तावित नागरिकता (संशोधन) विधेयक: भारतीय समाज और संस्कृति 
                        के ताने-बाने को बिखेरने पर आमदा सरकार</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>चार दिसम्बर को प्रधानमंत्री की अध्यक्षता में केन्द्रीय कैबिनेट ने प्रस्तावित नागरिकता 
                        संशोधन विधेयक,2019 को मंज़ूरी दी और शीतकालीन सत्र में इसे संसद में पेश करने का निर्णय लिया। 
                        सत्तारूढ़ दल के शीर्ष नेतृत्व की मानें, तो यह विधेयक उतना ही महत्वपूर्ण है जितना अनुच्छेद 370 के 
                        अधिकतर प्रावधानों को खत्म करने वाला विधेयक था। साथ ही, इसकी विपक्ष के द्वारा की जा रही आलोचना के प्रति आक्रामक होने की अपील भाजपा से की। ध्यातव्य है कि काँग्रेस और ऑल इंडिया यूनाइटेड डेमोक्रेटिक फ्रंट धार्मिक आधार पर नागरिकता देने को लेकर इसका विरोध कर रहे हैं। दरअसल इस संशोधन 
                        को असम समझौता, 1985 का उल्लंघन बताया जा रहा है। </p>
                    <p>प्रस्तावित संशोधन मशहूर शायर राहत इन्दौरी की इन पंक्तियों की याद दिला जाते हैं:</p>
                    <p>सभी का ख़ून है शामिल, यहाँ की मिट्टी में किसी के बाप का हिन्दोस्तान थोड़ी है। फिर भी, अगर किन्हीं को प्रस्तावित संशोधनों के विध्वंसकारी प्रभाव समझ में नहीं आ रहे हों, तो मैं एक बार फिर से राहत इन्दौरी की ही इस पंक्तियों को उद्धृत करना चाहूँगा:</p>
                    <p>लगेगी आग, तो आएँगे घर कई ज़द में; यहाँ पे सिर्फ़ हमारा मकान थोड़ी है। मैं इसे राजनीतिक दोगलापन ही कहूँगा कि एक ओर गृहमंत्री अमित शाह लोकसभा-चुनाव,2024 को ध्यान में रखते हुए ‘नागरिकों के लिए राष्ट्रीय रजिस्टर’ (NRC) की व्यवस्था को पूरे भारत में लागू करने की बात करते हैं, वहीं असम में उनके ही दल की सरकार में शामिल वरिष्ठ मंत्री हेमन्त विस्तार शर्मा एनआरसी के अंतिम प्रारूप को वापस लेने की बात कर रहे हैं। एक ओर बांग्लादेशी घुसपैठियों की चुनौती से मुक़ाबले के लिए एनआरसी लाया जा रहा है, दूसरी ओर नागरिकता अधिनियम में प्रस्तावित संशोधनों के जरिए बांग्लादेशी घुसपैठियों के प्रश्न को बांग्लादेशी मुस्लिम घुसपैठियों के प्रश्न तक सीमित कर एनआरसी की पूरी क़वायद को ही अप्रासंगिक बनाने की कोशिश की जा रही है। इस प्रकार यह मसला वोटबैंक की राजनीति से जुड़कर न केवल भारतीय समाज और राजनीति के सम्प्रदायीकरण का मार्ग प्रशस्त कर रहा है, वरन् असम समझौते के प्रावधानों को धता बतलाते हुए बरार घाटी और ब्रह्मपुत्र घाटी  के बीच के भौगोलिक विभाजन को गहराता हुआ असम समस्या को जटिल बनाने पर आमदा है। इसी आलोक में प्रस्तावित नागरिकता संशोधन विधेयक के विविध पहलुओं की समीक्षा करता यह आलेख!</p>
                </Modal.Body>

                <Modal.Footer>
                    {/* <Button variant="secondary">Close</Button> */}
                    <Button variant="primary">Read Blog</Button>
                </Modal.Footer>
            </Modal.Dialog>
            <br />
        </Container>
    );
}

export default BlogPage;