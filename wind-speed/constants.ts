namespace jacdac {
    // Service: Wind speed
    export const SRV_WIND_SPEED = 0x1b591bbf
    export const enum WindSpeedReg {
        /**
         * Read-only m/s u16.16 (uint32_t). The velocity of the wind.
         *
         * ```
         * const [windSpeed] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        WindSpeed = 0x101,

        /**
         * Read-only m/s u16.16 (uint32_t). Error on the reading
         *
         * ```
         * const [windSpeedError] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        WindSpeedError = 0x106,

        /**
         * Constant m/s u16.16 (uint32_t). Maximum speed that can be measured by the sensor.
         *
         * ```
         * const [maxWindSpeed] = jdunpack<[number]>(buf, "u16.16")
         * ```
         */
        MaxWindSpeed = 0x105,
    }

}
