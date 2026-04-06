"use client";

import { Card, Column, Media, Row, Avatar, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

interface PostProps {
  post: any;
  thumbnail: boolean;
}

export default function Post({ post, thumbnail }: PostProps) {
  return (
    <Card

      fillWidth
      key={post.slug}
      href={`/blog/${post.slug}`}
      transition="micro-medium"
      direction="row" // ✅ FIX 1: paksa horizontal
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
      gap="24"
    >
      
      {/* ✅ FIX 2: IMAGE */}
      {post.metadata.image && thumbnail && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          border="neutral-alpha-weak"
          cursor="interactive"
          radius="l"
          src={post.metadata.image}
          alt={"Thumbnail of " + post.metadata.title}
          aspectRatio="2.5 / 3.5"
          style={{
            width: "100px",  
            // minWidth:"220px",  // ✅ biar tidak terlalu kecil
            maxWidth: "400px",   // ✅ sesuai permintaan kamu
            flexShrink: 0       // ✅ biar tidak mengecil
          }}
        />
      )}

      {/* ✅ FIX 3: CONTENT KE KANAN */}
      <Column
        fillWidth
        paddingY="24"
        paddingX="l"
        gap="20"
        vertical="start"
      >
        <Row gap="24" vertical="center">
          <Row vertical="center" gap="16">
            <Avatar src={person.avatar} size="s" />
            <Text variant="label-default-s">{person.name}</Text>
          </Row>

          <Text variant="body-default-xs" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt, false)}
          </Text>
        </Row>

        <Text variant="heading-strong-l" wrap="balance">
          {post.metadata.title}
        </Text>

        {post.metadata.tag && (
          <Text variant="label-strong-s" onBackground="neutral-weak">
            {post.metadata.tag}
          </Text>
        )}
      </Column>
    </Card>
  );
}