namespace jacdac {
    // Service: Traffic Light
    export const SRV_TRAFFIC_LIGHT = 0x15c38d9b
    export const enum TrafficLightReg {
        /**
         * Read-write bool (uint8_t). The on/off state of the red light.
         *
         * ```
         * const [red] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Red = 0x80,

        /**
         * Read-write bool (uint8_t). The on/off state of the red light.
         *
         * ```
         * const [orange] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Orange = 0x81,

        /**
         * Read-write bool (uint8_t). The on/off state of the red light.
         *
         * ```
         * const [green] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Green = 0x82,
    }

}
