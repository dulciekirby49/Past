// # /////////////////////////////////////////////////////////////////////////// #
// #                                                                             #
// #                      Copyright 2022 TheH2SO4 (Hiro)                         #
// #                                                                             #
// #   Licensed under the Apache License, Version 2.0 (the "License");           #
// #   you may not use this file except in compliance with the License.          #
// #   You may obtain a copy of the License at                                   #
// #                                                                             #
// #       http://www.apache.org/licenses/LICENSE-2.0                            #
// #                                                                             #
// #   Unless required by applicable law or agreed to in writing, software       #
// #   distributed under the License is distributed on an "AS IS" BASIS,         #
// #   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  #
// #   See the License for the specific language governing permissions and       #
// #   limitations under the License.                                            #
// #                                                                             #
// # /////////////////////////////////////////////////////////////////////////// #

// # ////////////////| [🥽] | TheH2SO4 | [⚗️] |//////////////// #

// # || Start [📍] || #

import { getCustomIpDetails } from '@sarequl/client-ip-details';
import { isIP } from 'is-ip';
import getSymbolFromCurrency from 'currency-symbol-map';
import clm from 'country-locale-map';
import country from 'countryjs';

const PLUGIN_VERSION="1.1.1"

let handler = async (m, {text, conn, args, usedPrefix, command }) => {

    function message(text) {
        conn.sendMessage(m.chat, { text: `${text}` }, {quoted: m})
    }
    
        try {
            if (! text) {
                message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Hey! This is not the correct way to use *${usedPrefix}trackip*. The correct way to use it is *${usedPrefix}trackip + <(IPv4/IPv6) publish from file>*! Example: *${usedPrefix}trackip 179.24.239.201*.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Houssam-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
            } else {
                if (isIP(args[0])) {
                    const publicIP = await getCustomIpDetails(args[0])
                        const countryClm = clm.getCountryByAlpha2(publicIP.countryCode)
                            const countryJs = country.info(publicIP.countryCode)
                                for (var i = 0; i < countryJs.tld.length; i++) {
                                    message(`╭══════⊂(^(工)^)⊃══════╮\n\n[✅] Information has been found about: ' *${args[0]}* '!\n\n➤ _(IPv4/IPv6): *${publicIP.query}*_\n➤ _Red Movil: *${publicIP.mobile ? '✅':'❌'}*_\n➤ _Proxy/VPN: *${publicIP.proxy ? '✅':'❌'}*_\n➤ _Country: *${publicIP.country}*_\n➤ _Country name (EN): *${countryJs.translations.es}*_\n➤ _native country name: *${countryJs.nativeName}*_\n➤ _Fronteras number: *${countryJs.borders.length}*_\n➤ _Total area of ​​the country: *${countryJs.area} (KM)*_\n➤ _Capital of the country: *${countryClm.capital}*_\n➤ _Number of provinces in the country: *${countryJs.provinces.length}*_\n➤ _Country flag: *${countryClm.emoji}*_\n➤ _Flag Code: 
*${countryClm.emojiU}*_\n➤ _Country Code: *${publicIP.countryCode}*_\n➤ _Country Code (Numero): *${countryClm.numeric}*_\n➤ _Country language: *${countryJs.languages[0]}*_\n➤ _Number of languages ​​theCountry: *${countryJs.languages.length}*_\n➤ _Country code: *+${countryJs.callingCodes[0]}*_\n➤ _Number of country prefixes: *${countryJs.callingCodes.length}*_\n➤ _Country Domains: *${countryJs.tld[i]}*_\n➤ _Number of country domains: *${countryJs.tld.length}*_\n➤ _Continent: *${publicIP.continent}*_\n➤ _Continental Code: *${publicIP.continentCode}*_\n➤ _Region: *${publicIP.regionName}*_\n➤ _Region Code: 
*${publicIP.region}*_\n➤ _Town: *${publicIP.city}*_\n➤ _Code Postal: *${publicIP.zip}*_\n➤ _Latitude: *${publicIP.lat}*_\n➤ _Length: *${publicIP.lon}*_\n➤ _Time zone: *${publicIP.timezone}*_\n➤ _Currency Local: *${publicIP.currency}*_\n➤ _Symbol of Moneda Local: *${getSymbolFromCurrency(publicIP.currency)}*_\n➤ _Numero de coins: *${countryJs.currencies.length}*_\n➤ _Number of Inhabitants: *${countryJs.population}*_\n➤ _Demonym (EN): *${countryJs.demonym}*_\n➤ _ISP: *${publicIP.isp}*_\n➤ _Organization: *${publicIP.org}*_\n➤ _ASN: *${publicIP.as}*_\n➤ _Nombre de ASN: *${publicIP.asname}*_\n➤ _Reverse Proxy: *${publicIP.reverse}*_\n➤ _Hosting (VPS/VDS/DEDI): *${publicIP.hosting ? '✅':'❌'}*_\n➤ _Wikipedia: *${countryJs.wiki}*_\n\n_This address information (IPv4/IPv6) ' *${publicIP.query}* ' is not 100% accurate, please refrain from stating otherwise._\n\nsome error? Report it by opening an issue on GitHub!\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Houssam-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)   
                                }
                } else {
                    message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] This address (IPv4/IPv6) is not valid. Please open an issue on GitHub to report the bug..\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Houssam-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
                }
            }
        } catch(error) {
            message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] An error "${error}" has occurred. Please open an issue on GitHub to report the bug..\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Houssam-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
        }
}

handler.help = ['trackip + <(IPv4/IPv6) publice>']
handler.tags = ['tools']
handler.command = ['trackip']
export default handler
