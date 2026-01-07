"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ClientOnly } from "./clientOnly";
import { ColorModeProvider } from "./color-mode";

export function Provider(props) {
  return (
    <ClientOnly>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </ClientOnly>
  );
}
