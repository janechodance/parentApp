import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import CategoryCard from "../activityCard/categoryCard";
import ArrowRight from "../../../assets/icons/arrowRight.svg";

export default function Categories() {
  return (
    <View>
      <Text style={styles.headerText}>Categories</Text>
      <View style={{ ...styles.cardContainer, marginTop: 12 }}>
        <CategoryCard
          category="Gross Motor"
          imageSource={{
            uri: "https://s3-alpha-sig.figma.com/img/c4bc/7d00/88d461d963b6d6175549366e47178941?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cjjEmkYhziJAiKqIpqpeouU4L31t6nNruPzIvXUW9eGJt-yO0uag10T8SRwlhUWTZefeytn49oio50GQsmSV~y~~w2-daT5vU8YCBtOBZ7arJhjhcBEEPTx4p00ae0rAtsQbrP6eQjL27xggln9qYUdZkZQOu-XK3BpInzQ21ouzHWTLfW1s9VV~fkBr8txkxx53~Ym8uDzqm4227526~-pLkUpTYr~JHpI5DtAZtAawmzBxxckNAiaLXLBEpOy-Gd12Y9uZeVnO9EM4Y9i~YTx7hrJ216OF7ZHojIysnTrdXMzH85Pn5Ay59jrUfdg7Ue7Ziu818UGT0O7VizRsOQ__",
          }}
        />
        <CategoryCard
          category="Communication"
          imageSource={{
            uri: "https://s3-alpha-sig.figma.com/img/0a7e/4d1f/fcab0012a2157f43085812fd379ad1b4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yvdf0KzaTeV3nuvBVWUTahpRmylBJJe9j6DZfE0oA~4G7tuvqrSf19SeWHCJRNEJhn6WVSFgqZbiOUsget1bZZ~zWaGqylZ9agxwgdQq-2MeWrJcbwUm0M~3exHThl3U7q5if4funsVDGlFjcaUGU4UHUmsg0Sz6Cv6RZOm2aX45cUwbDxivWFekg1yNuaFzPhcmPJtqB9SDe1pw6zXNJgtLperMbYYAxlFC58xSiErzWp5WEFt4V-J5C-8FEH0nT~1kVaYEQ5OfSo7f6F23qT7APNHMBKG7hcPmcLwrHsHqeO6JUocV8SDHZ8BKXkmkNNU0j8paQwGa3YPj~5Ia9w__",
          }}
        />
      </View>
      <View style={{ ...styles.cardContainer, marginTop: 24 }}>
        <CategoryCard
          category="Social Play"
          imageSource={{
            uri: "https://s3-alpha-sig.figma.com/img/0fba/a489/2024cab5fec342cfac761c359c612621?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hk6S~HMbyW1S9VvxUIQTlJvlingOWCOygl5OKJGL5wVkruLEVtorZQPMpx1qtRYM68KDcbmRQZDHHL4wK4ME9krJqcw9BH3xDPBYK1n50BD8Z6TCmfIokgzpr~WgUrXLeiLBbbHssLxTfevDSsgc1Gi8blAM6Lr6SOZQdLO4pNIuBm3MhBgnO24hn2thd-xSSyP~zViwhc1qG0DVFSTxKW0Wk~dCnBd6zcsK1F4rmLcb2aQzx2IvDHsA5GFYCKgJdAxt4WUcMMmP-o3gLIbHW0dSSjeLqFFj-k2SBmf2ayE8x~V~~M8cU2ro5QWXtrxTiq-8Zl5xeJsLo88-0R7sPQ__",
          }}
        />
        <CategoryCard
          category="Vision"
          imageSource={{
            uri: "https://s3-alpha-sig.figma.com/img/4bc4/bed2/16e8a98a65c0c81ab94a22791d9a2fc9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0lflHe~CU~4krWlTxB9DWcZnur0lWcSQ-MquTndfuf35cToz6-2an8LRyjkTx04BrVKgjii45~VHW0Cq7cyVu3L9QLJdMw2LdyIWSJfUEdz1n-O5GTUcVpZdvyjmfcBQGR-8-6g2ZjGGF~VStxxmP~2U4uCi3juexdp0pvCEFUZqOeut7vNzNtUIhwjDu2a2ahOrgCMWdft8MYKvoQ1YmXWlBFQVTS8yOzoGs6SFG4cfip3KjrTWWde277UQVzJXlD7RWevEUNExCU8Y1TK~62l1PfG8vcqhej~-Z0FkoJymOdbXCl4a6QVPbW4eKAgHva5LhH1VQZ9hpidNoe80Q__",
          }}
        />
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreText}>View More Skills</Text>
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Jost-Medium",
    fontSize: 20,
    lineHeight: 30,
    alignSelf: "flex-start",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moreButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 12,
    alignItems: "center",
  },
  moreText: {
    fontFamily: "Jost-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#3350E9",
    marginRight: 8,
  },
});
