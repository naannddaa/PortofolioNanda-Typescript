"use client";

import { Button, Column, Row, Text, Media } from "@once-ui-system/core";
import React from "react";

interface Experience {
  company: string;
  timeframe: string;
  role: string;
  achievements: React.ReactNode[];
  link?: string;
  images?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
}

interface WorkExperienceCardProps {
  experience: Experience;
  index: number;
}

export function WorkExperienceCard({
  experience,
  index,
}: WorkExperienceCardProps) {
  return (
    <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
      <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
        <Text id={experience.company} variant="heading-strong-l">
          {experience.company}
        </Text>
        <Text variant="heading-default-xs" onBackground="neutral-weak">
          {experience.timeframe}
        </Text>
      </Row>
      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
        {experience.role}
      </Text>
      <Column as="ul" gap="16">
        {experience.achievements.map(
          (achievement: React.ReactNode, achievementIndex: number) => (
            <React.Fragment
              key={`${experience.company}-achievement-${achievementIndex}`}>
              <Text as="li" variant="body-default-m">
                {achievement}
              </Text>
            </React.Fragment>
          ),
        )}
      </Column>
      {experience.link && (
        <Row paddingTop="m">
          <Button
            onClick={() => window.open(experience.link, "_blank")}
            suffixIcon="arrowUpRightFromSquare"
            variant="secondary">
            View project
          </Button>
        </Row>
      )}
      {experience.images && experience.images.length > 0 && (
        <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
          {experience.images.map((image, imageIndex) => (
            <Row
              key={`${experience.company}-image-${image.src}-${imageIndex}`}
              border="neutral-medium"
              radius="m"
              minWidth={image.width}
              height={image.height}>
              <Media
                enlarge
                radius="m"
                sizes={image.width.toString()}
                alt={image.alt}
                src={image.src}
              />
            </Row>
          ))}
        </Row>
      )}
    </Column>
  );
}
