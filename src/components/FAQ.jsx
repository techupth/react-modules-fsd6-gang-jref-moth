import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export function FAQ() {
  return (
    <section id="faq">
      <h1>FAQ (คำถามที่พบบ่อย)</h1>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              What makes XYZ Company's products so unique?
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            XYZ Company is deeply committed to giving back to the communities we
            serve. We actively engage in philanthropic initiatives, supporting
            local charities and community projects. Additionally, we encourage
            our employees to participate in volunteer programs, fostering a
            culture of social responsibility. By being actively involved in the
            community, we aim to make a positive impact beyond the products and
            services we offer.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              How does XYZ Company contribute to sustainability and
              environmental conservation?
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            XYZ Company is deeply committed to giving back to the communities we
            serve. We actively engage in philanthropic initiatives, supporting
            local charities and community projects. Additionally, we encourage
            our employees to participate in volunteer programs, fostering a
            culture of social responsibility. By being actively involved in the
            community, we aim to make a positive impact beyond the products and
            services we offer.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              What kind of support can customers expect from XYZ Company's
              customer service team?
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            XYZ Company is deeply committed to giving back to the communities we
            serve. We actively engage in philanthropic initiatives, supporting
            local charities and community projects. Additionally, we encourage
            our employees to participate in volunteer programs, fostering a
            culture of social responsibility. By being actively involved in the
            community, we aim to make a positive impact beyond the products and
            services we offer.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              How does XYZ Company stay ahead of industry trends?
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            XYZ Company is deeply committed to giving back to the communities we
            serve. We actively engage in philanthropic initiatives, supporting
            local charities and community projects. Additionally, we encourage
            our employees to participate in volunteer programs, fostering a
            culture of social responsibility. By being actively involved in the
            community, we aim to make a positive impact beyond the products and
            services we offer.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Can you tell us about XYZ Company's commitment to community
              involvement?
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            XYZ Company is deeply committed to giving back to the communities we
            serve. We actively engage in philanthropic initiatives, supporting
            local charities and community projects. Additionally, we encourage
            our employees to participate in volunteer programs, fostering a
            culture of social responsibility. By being actively involved in the
            community, we aim to make a positive impact beyond the products and
            services we offer.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
