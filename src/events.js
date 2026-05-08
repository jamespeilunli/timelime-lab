const RAW_EVENTS = [
  {
    id: "columbus-arrives",
    year: 1492,
    era: "Early Colonization",
    title: "Columbus Reaches the Caribbean",
    description:
      "European contact with the Americas begins the Columbian Exchange and launches Spanish empire-building.",
  },
  {
    id: "roanoke-lost-colony",
    year: 1587,
    era: "Early Colonization",
    title: "Roanoke Colony Is Founded",
    description:
      "Sir Walter Raleigh sponsors an English settlement that disappears by 1590 and becomes known as the Lost Colony.",
  },
  {
    id: "spanish-armada-defeated",
    year: 1588,
    era: "Early Colonization",
    title: "England Defeats the Spanish Armada",
    description:
      "England's naval victory weakens Spanish dominance and opens the door for English colonization.",
  },
  {
    id: "jamestown-founded",
    year: 1607,
    era: "Early Colonization",
    title: "Jamestown Is Founded",
    description:
      "The Virginia Company establishes the first permanent English colony in North America.",
  },
  {
    id: "headright-system",
    year: 1618,
    era: "Early Colonization",
    title: "Headright System Begins",
    description:
      "Virginia offers land to sponsors who pay for settlers' passage, strengthening plantation expansion.",
  },
  {
    id: "house-of-burgesses",
    year: 1619,
    era: "Early Colonization",
    title: "House of Burgesses Meets",
    description:
      "Virginia creates the first representative assembly in the English colonies as slavery also begins to take root.",
  },
  {
    id: "mayflower-compact",
    year: 1620,
    era: "Early Colonization",
    title: "Mayflower Compact Signed",
    description:
      "Pilgrims at Plymouth agree to self-government based on consent of the governed.",
  },
  {
    id: "massachusetts-bay",
    year: 1629,
    era: "Early Colonization",
    title: "Massachusetts Bay Colony Chartered",
    description:
      "Puritans led by John Winthrop build a religious commonwealth around the idea of a city on a hill.",
  },
  {
    id: "great-puritan-migration",
    year: 1629,
    era: "Early Colonization",
    title: "Great Puritan Migration Begins",
    description:
      "Thousands of English Puritans move to New England and reshape colonial society.",
  },
  {
    id: "connecticut-charter",
    year: 1635,
    era: "Early Colonization",
    title: "Connecticut Colony Takes Shape",
    description:
      "Settlers form a New England colony that develops its own chartered government.",
  },
  {
    id: "maryland-founded",
    year: 1635,
    era: "Early Colonization",
    title: "Maryland Becomes a Catholic Haven",
    description:
      "Lord Baltimore's colony offers a refuge for English Catholics while still fitting the plantation economy.",
  },
  {
    id: "act-of-toleration",
    year: 1649,
    era: "Early Colonization",
    title: "Maryland Act of Toleration",
    description:
      "Maryland protects worship for Christians, an early but limited experiment in religious toleration.",
  },
  {
    id: "salutary-neglect",
    year: 1650,
    era: "Colonial America",
    title: "Salutary Neglect Begins",
    description:
      "Britain loosely enforces imperial rules, giving colonies space to develop local autonomy.",
  },
  {
    id: "bacons-rebellion",
    year: 1670,
    era: "Colonial America",
    title: "Bacon's Rebellion",
    description:
      "Frontier anger in Virginia exposes tensions over land, Native policy, class, and labor systems.",
  },
  {
    id: "new-york-colony",
    year: 1685,
    era: "Colonial America",
    title: "Middle Colonies Expand",
    description:
      "New York, Pennsylvania, and the Carolinas reflect the diversity of proprietary colonial settlement.",
  },
  {
    id: "salem-witch-trials",
    year: 1692,
    era: "Colonial America",
    title: "Salem Witch Trials",
    description:
      "Religious, political, and gender anxieties fuel accusations and executions in Massachusetts.",
  },
  {
    id: "great-awakening",
    year: 1730,
    era: "Colonial America",
    title: "First Great Awakening Begins",
    description:
      "Revivalists such as Jonathan Edwards and George Whitefield stress emotional conversion and challenge old authority.",
  },
  {
    id: "albany-plan",
    year: 1754,
    era: "Independence",
    title: "Albany Plan of Union",
    description:
      "Benjamin Franklin proposes an intercolonial government for defense, but colonies reject the plan.",
  },
  {
    id: "seven-years-war",
    year: 1754,
    era: "Independence",
    title: "Seven Years' War Begins",
    description:
      "The French and Indian War starts a global conflict that ends with British victory and colonial resentment.",
  },
  {
    id: "proclamation-1763",
    year: 1763,
    era: "Independence",
    title: "Proclamation of 1763",
    description:
      "Britain bars colonial settlement west of the Appalachians, angering colonists and ending salutary neglect.",
  },
  {
    id: "sugar-currency-acts",
    year: 1764,
    era: "Independence",
    title: "Sugar Act and Currency Act",
    description:
      "Parliament tightens imperial control by taxing sugar and restricting colonial paper money.",
  },
  {
    id: "stamp-act",
    year: 1765,
    era: "Independence",
    title: "Stamp Act",
    description:
      "A broad revenue tax on printed materials provokes the cry of no taxation without representation.",
  },
  {
    id: "declaratory-act",
    year: 1766,
    era: "Independence",
    title: "Declaratory Act",
    description:
      "After repealing the Stamp Act, Parliament claims full authority to legislate for the colonies.",
  },
  {
    id: "townshend-acts",
    year: 1767,
    era: "Independence",
    title: "Townshend Acts",
    description:
      "Import taxes, writs of assistance, and new enforcement measures deepen colonial resistance.",
  },
  {
    id: "boston-massacre",
    year: 1770,
    dateLabel: "Mar 5, 1770",
    era: "Independence",
    title: "Boston Massacre",
    description:
      "British soldiers kill colonists in Boston, giving patriot leaders a powerful propaganda tool.",
  },
  {
    id: "boston-tea-party",
    year: 1773,
    dateLabel: "Dec 16, 1773",
    era: "Independence",
    title: "Boston Tea Party",
    description:
      "Colonists dump tea into Boston Harbor to protest the tea tax and British monopoly power.",
  },
  {
    id: "coercive-acts",
    year: 1774,
    era: "Independence",
    title: "Coercive Acts",
    description:
      "Britain punishes Massachusetts by closing Boston's port and tightening military authority.",
  },
  {
    id: "first-continental-congress",
    year: 1774,
    era: "Independence",
    title: "First Continental Congress",
    description:
      "Delegates from every colony except Georgia meet to coordinate grievances and boycotts.",
  },
  {
    id: "lexington-concord",
    year: 1775,
    dateLabel: "Apr 1775",
    era: "Independence",
    title: "Lexington and Concord",
    description:
      "The first battles of the American Revolution turn protest into open war.",
  },
  {
    id: "second-continental-congress",
    year: 1775,
    era: "Independence",
    title: "Second Continental Congress",
    description:
      "Congress creates the Continental Army, names Washington commander, and acts as a national government.",
  },
  {
    id: "olive-branch-petition",
    year: 1775,
    dateLabel: "Jul 5, 1775",
    era: "Independence",
    title: "Olive Branch Petition",
    description:
      "Colonists make a final appeal for reconciliation, but King George III rejects the effort.",
  },
  {
    id: "common-sense",
    year: 1776,
    dateLabel: "Jan 1776",
    era: "Independence",
    title: "Common Sense Published",
    description:
      "Thomas Paine argues that monarchy is irrational and independence is the practical answer.",
  },
  {
    id: "declaration-commissioned",
    year: 1776,
    dateLabel: "Jun 1776",
    era: "Independence",
    title: "Jefferson Drafts the Declaration",
    description:
      "Congress appoints Thomas Jefferson to write the formal case for independence.",
  },
  {
    id: "declaration-independence",
    year: 1776,
    dateLabel: "Jul 4, 1776",
    era: "Independence",
    title: "Declaration of Independence",
    description:
      "The colonies announce independence and ground their argument in natural rights and popular sovereignty.",
  },
  {
    id: "articles-confederation",
    year: 1777,
    era: "Early Republic",
    title: "Articles of Confederation",
    description:
      "The first national government creates a weak central authority with limited taxing power.",
  },
  {
    id: "franco-american-alliance",
    year: 1778,
    era: "Independence",
    title: "Franco-American Alliance",
    description:
      "France joins the American side after Saratoga, giving the Revolution crucial military support.",
  },
  {
    id: "treaty-of-paris-1783",
    year: 1783,
    era: "Early Republic",
    title: "Treaty of Paris",
    description:
      "Britain recognizes U.S. independence and grants the new nation western lands.",
  },
  {
    id: "constitutional-convention",
    year: 1787,
    era: "Early Republic",
    title: "Constitutional Convention",
    description:
      "Delegates write a new Constitution with checks and balances, federalism, and major compromises.",
  },
  {
    id: "constitution-effective",
    year: 1789,
    era: "Early Republic",
    title: "Constitution Takes Effect",
    description:
      "The new federal government begins operating under the Constitution.",
  },
  {
    id: "washington-elected",
    year: 1789,
    era: "Early Republic",
    title: "Washington Elected President",
    description:
      "George Washington sets precedents while Hamilton's financial program shapes the new republic.",
  },
  {
    id: "bill-of-rights",
    year: 1791,
    era: "Early Republic",
    title: "Bill of Rights Added",
    description:
      "The first ten amendments protect civil liberties and ease Anti-Federalist concerns.",
  },
  {
    id: "farewell-address",
    year: 1797,
    era: "Early Republic",
    title: "Washington's Farewell Address",
    description:
      "Washington warns against permanent foreign alliances and intense party conflict.",
  },
  {
    id: "john-adams",
    year: 1797,
    era: "Early Republic",
    title: "John Adams Presidency Begins",
    description:
      "The XYZ Affair, Alien and Sedition Acts, and Virginia and Kentucky Resolutions test the young republic.",
  },
  {
    id: "jefferson-elected",
    year: 1801,
    era: "Early Republic",
    title: "Jefferson Elected President",
    description:
      "The election of 1800 brings a peaceful party transfer and a more Democratic-Republican direction.",
  },
  {
    id: "marbury-madison",
    year: 1801,
    era: "Early Republic",
    title: "Marbury v. Madison",
    description:
      "The Supreme Court establishes judicial review in the conflict over midnight appointments.",
  },
  {
    id: "louisiana-purchase",
    year: 1803,
    era: "Early Republic",
    title: "Louisiana Purchase",
    description:
      "Jefferson doubles U.S. territory and sends Lewis and Clark to explore the West.",
  },
  {
    id: "embargo-act",
    year: 1807,
    era: "Early Republic",
    title: "Embargo Act",
    description:
      "Jefferson tries to avoid war through trade restrictions, but the policy hurts the American economy.",
  },
  {
    id: "madison-presidency",
    year: 1809,
    era: "Early Republic",
    title: "Madison Presidency Begins",
    description:
      "James Madison faces attacks on U.S. shipping and pressure that leads to war with Britain.",
  },
  {
    id: "war-of-1812",
    year: 1812,
    era: "Early Republic",
    title: "War of 1812",
    description:
      "The United States declares war on Britain over impressment, trade restrictions, and frontier conflict.",
  },
  {
    id: "battle-new-orleans",
    year: 1815,
    era: "Early Republic",
    title: "Battle of New Orleans",
    description:
      "Andrew Jackson's victory boosts nationalism even though the Treaty of Ghent had already been signed.",
  },
  {
    id: "monroe-presidency",
    year: 1817,
    era: "Early Republic",
    title: "Monroe Presidency Begins",
    description:
      "The Era of Good Feelings emphasizes nationalism, one-party politics, and postwar confidence.",
  },
  {
    id: "mcculloch-panic-adams-onis",
    year: 1819,
    era: "Early Republic",
    title: "McCulloch, Panic, and Adams-Onis",
    description:
      "The national bank is upheld, a financial panic hits, and the United States gains Florida from Spain.",
  },
  {
    id: "missouri-compromise",
    year: 1820,
    era: "Early Republic",
    title: "Missouri Compromise",
    description:
      "Missouri enters as a slave state, Maine as a free state, and the 36-30 line limits slavery's expansion.",
  },
  {
    id: "monroe-doctrine",
    year: 1823,
    era: "Early Republic",
    title: "Monroe Doctrine",
    description:
      "The United States warns European powers against new colonization or intervention in the Americas.",
  },
  {
    id: "corrupt-bargain",
    year: 1824,
    era: "Jacksonian America",
    title: "Corrupt Bargain",
    description:
      "John Quincy Adams wins the presidency after Henry Clay's support and then names Clay secretary of state.",
  },
  {
    id: "john-quincy-adams",
    year: 1825,
    era: "Jacksonian America",
    title: "John Quincy Adams Presidency",
    description:
      "Adams's presidency struggles against rising Jacksonian opposition and a changing party system.",
  },
  {
    id: "jackson-presidency",
    year: 1829,
    era: "Jacksonian America",
    title: "Jackson Presidency Begins",
    description:
      "The era of the common man expands white male suffrage and celebrates popular politics.",
  },
  {
    id: "indian-removal-act",
    year: 1830,
    era: "Jacksonian America",
    title: "Indian Removal Act",
    description:
      "Federal policy forces Native nations westward and leads to the Trail of Tears.",
  },
  {
    id: "nat-turner",
    year: 1830,
    era: "Jacksonian America",
    title: "Nat Turner's Rebellion",
    description:
      "A failed enslaved revolt in Virginia leads southern states to tighten Black Codes.",
  },
  {
    id: "nullification-crisis",
    year: 1832,
    era: "Jacksonian America",
    title: "Nullification Crisis",
    description:
      "South Carolina challenges federal tariff authority and tests the balance between state and national power.",
  },
  {
    id: "panic-1837",
    year: 1837,
    era: "Jacksonian America",
    title: "Panic of 1837",
    description:
      "A severe financial crisis shapes Martin Van Buren's presidency and exposes instability in banking.",
  },
  {
    id: "harrison-tyler",
    year: 1841,
    era: "Antebellum",
    title: "Harrison Dies, Tyler Takes Office",
    description:
      "William Henry Harrison dies after one month, making John Tyler the first vice president to succeed a president.",
  },
  {
    id: "second-great-awakening",
    year: 1790,
    era: "Antebellum",
    title: "Second Great Awakening Begins",
    description:
      "Evangelical revivalism inspires reform movements around temperance, abolition, education, and women's rights.",
  },
  {
    id: "texas-annexation",
    year: 1844,
    era: "Antebellum",
    title: "Texas Annexation Begins",
    description:
      "The United States moves toward annexing Texas, intensifying disputes over slavery and expansion.",
  },
  {
    id: "polk-elected",
    year: 1845,
    era: "Antebellum",
    title: "James K. Polk Elected",
    description:
      "Polk's presidency pursues Manifest Destiny through Texas, Oregon, and war with Mexico.",
  },
  {
    id: "oregon-treaty",
    year: 1846,
    era: "Antebellum",
    title: "Oregon Treaty",
    description:
      "The United States and Britain set the northern border and secure American claims in the Pacific Northwest.",
  },
  {
    id: "mexican-american-war",
    year: 1846,
    era: "Antebellum",
    title: "Mexican-American War Begins",
    description:
      "War with Mexico expands U.S. territory and sharpens sectional conflict over slavery.",
  },
  {
    id: "guadalupe-hidalgo",
    year: 1848,
    era: "Antebellum",
    title: "Treaty of Guadalupe Hidalgo",
    description:
      "Mexico cedes vast western lands to the United States after the Mexican-American War.",
  },
  {
    id: "zachary-taylor",
    year: 1849,
    era: "Antebellum",
    title: "Zachary Taylor Elected",
    description:
      "The last Whig elected president takes office as debate over the Mexican Cession intensifies.",
  },
  {
    id: "compromise-1850",
    year: 1850,
    era: "Antebellum",
    title: "Compromise of 1850",
    description:
      "California enters free, a stronger Fugitive Slave Law passes, and popular sovereignty expands.",
  },
  {
    id: "uncle-toms-cabin",
    year: 1852,
    era: "Antebellum",
    title: "Uncle Tom's Cabin Published",
    description:
      "Harriet Beecher Stowe's novel fuels antislavery feeling and sectional tension.",
  },
  {
    id: "kansas-nebraska-act",
    year: 1854,
    era: "Antebellum",
    title: "Kansas-Nebraska Act",
    description:
      "Popular sovereignty repeals the Missouri Compromise line and helps destroy the Whig Party.",
  },
  {
    id: "bleeding-kansas",
    year: 1855,
    era: "Antebellum",
    title: "Bleeding Kansas",
    description:
      "Proslavery and antislavery settlers clash violently over whether Kansas will permit slavery.",
  },
  {
    id: "dred-scott",
    year: 1857,
    era: "Antebellum",
    title: "Dred Scott Decision",
    description:
      "The Supreme Court denies Black citizenship and says Congress cannot ban slavery in the territories.",
  },
  {
    id: "lincoln-douglas",
    year: 1858,
    era: "Antebellum",
    title: "Lincoln-Douglas Debates",
    description:
      "Debates over popular sovereignty and slavery elevate Abraham Lincoln's national profile.",
  },
  {
    id: "john-brown-raid",
    year: 1859,
    era: "Antebellum",
    title: "John Brown Raids Harpers Ferry",
    description:
      "Brown's attempted slave uprising terrifies the South and deepens the sectional crisis.",
  },
  {
    id: "south-carolina-secedes",
    year: 1860,
    dateLabel: "Dec 1860",
    era: "Civil War",
    title: "South Carolina Secedes",
    description:
      "South Carolina leaves the Union after Lincoln's election, leading other southern states toward the Confederacy.",
  },
  {
    id: "fort-sumter",
    year: 1861,
    dateLabel: "Apr 12, 1861",
    era: "Civil War",
    title: "Fort Sumter",
    description:
      "Confederate forces fire on the federal fort in Charleston Harbor and the Civil War begins.",
  },
  {
    id: "emancipation-proclamation",
    year: 1863,
    dateLabel: "Jan 1, 1863",
    era: "Civil War",
    title: "Emancipation Proclamation",
    description:
      "Lincoln declares enslaved people in rebelling areas free and reframes the war around emancipation.",
  },
  {
    id: "freedmens-bureau",
    year: 1865,
    era: "Reconstruction",
    title: "Freedmen's Bureau Established",
    description:
      "The federal government creates an agency to support formerly enslaved people and poor southerners.",
  },
  {
    id: "civil-war-ends",
    year: 1865,
    dateLabel: "Apr 1865",
    era: "Civil War",
    title: "Civil War Ends",
    description:
      "Confederate surrender and Lincoln's assassination close the war and open Reconstruction.",
  },
  {
    id: "reconstruction-begins",
    year: 1865,
    era: "Reconstruction",
    title: "Reconstruction Begins",
    description:
      "Federal leaders debate how to rebuild the South, readmit states, and define freedom after slavery.",
  },
  {
    id: "military-reconstruction",
    year: 1867,
    era: "Reconstruction",
    title: "Military Reconstruction Act",
    description:
      "Congress divides the former Confederacy into military districts and requires new state constitutions.",
  },
  {
    id: "fifteenth-amendment",
    year: 1869,
    era: "Reconstruction",
    title: "Fifteenth Amendment",
    description:
      "The Constitution bars denying the vote because of race, color, or previous servitude.",
  },
  {
    id: "credit-mobilier",
    year: 1872,
    era: "Gilded Age",
    title: "Credit Mobilier Scandal",
    description:
      "A railroad corruption scandal damages public trust during the Grant era.",
  },
  {
    id: "panic-1873",
    year: 1873,
    era: "Gilded Age",
    title: "Panic of 1873",
    description:
      "A financial crash triggers a long depression and intensifies labor and currency debates.",
  },
  {
    id: "compromise-1877",
    year: 1877,
    era: "Reconstruction",
    title: "Compromise of 1877",
    description:
      "Hayes becomes president and federal troops leave the South, ending military Reconstruction.",
  },
  {
    id: "sherman-antitrust",
    year: 1890,
    era: "Gilded Age",
    title: "Sherman Anti-Trust Act",
    description:
      "Congress creates a federal tool against monopolies during the age of Carnegie and Rockefeller.",
  },
  {
    id: "mckinley-tariff",
    year: 1890,
    era: "Gilded Age",
    title: "McKinley Tariff",
    description:
      "High protective tariffs reveal the era's battles over business power and consumer prices.",
  },
  {
    id: "wilson-gorman",
    year: 1894,
    era: "Gilded Age",
    title: "Wilson-Gorman Tariff",
    description:
      "A tariff law becomes part of wider arguments about taxes, business, and federal power.",
  },
  {
    id: "spanish-american-war",
    year: 1898,
    era: "Imperialism",
    title: "Spanish-American War Begins",
    description:
      "The United States defeats Spain and emerges with new overseas power in Cuba and the Philippines.",
  },
  {
    id: "platt-amendment",
    year: 1901,
    era: "Imperialism",
    title: "Platt Amendment",
    description:
      "The United States limits Cuban independence and claims the right to intervene.",
  },
  {
    id: "panama-canal",
    year: 1904,
    era: "Progressive Era",
    title: "Panama Canal Project Begins",
    description:
      "Roosevelt backs canal construction and a more assertive U.S. role in the Western Hemisphere.",
  },
  {
    id: "roosevelt-corollary",
    year: 1904,
    era: "Progressive Era",
    title: "Roosevelt Corollary",
    description:
      "The United States claims policing power in Latin America under the Big Stick approach.",
  },
  {
    id: "wilson-elected",
    year: 1912,
    era: "Progressive Era",
    title: "Woodrow Wilson Elected",
    description:
      "Wilson's victory brings New Freedom reform and soon places him at the center of World War I debates.",
  },
  {
    id: "wwi-neutrality",
    year: 1914,
    dateLabel: "Aug 1914",
    era: "World War I",
    title: "U.S. Neutrality Declared",
    description:
      "As World War I begins in Europe, Wilson initially keeps the United States officially neutral.",
  },
  {
    id: "lusitania",
    year: 1915,
    era: "World War I",
    title: "Lusitania Sunk",
    description:
      "German submarine warfare kills American passengers and pushes U.S. opinion against Germany.",
  },
  {
    id: "zimmermann-telegram",
    year: 1917,
    era: "World War I",
    title: "Zimmermann Telegram",
    description:
      "Germany's secret proposal to Mexico helps move the United States toward war.",
  },
  {
    id: "us-enters-wwi",
    year: 1917,
    era: "World War I",
    title: "U.S. Declares War on Germany",
    description:
      "The United States enters World War I after submarine warfare and diplomatic crises.",
  },
  {
    id: "espionage-act",
    year: 1917,
    era: "World War I",
    title: "Espionage Act",
    description:
      "The federal government restricts antiwar activity and dissent during World War I.",
  },
  {
    id: "sedition-act",
    year: 1918,
    era: "World War I",
    title: "Sedition Act",
    description:
      "Congress expands wartime speech restrictions and targets criticism of the government.",
  },
  {
    id: "fourteen-points",
    year: 1918,
    dateLabel: "Jan 1918",
    era: "World War I",
    title: "Fourteen Points",
    description:
      "Wilson proposes a postwar peace plan, including the League of Nations.",
  },
  {
    id: "harding-presidency",
    year: 1921,
    era: "Roaring Twenties",
    title: "Harding Presidency Begins",
    description:
      "Harding's return to normalcy is later stained by scandals in his administration.",
  },
  {
    id: "coolidge-presidency",
    year: 1923,
    era: "Roaring Twenties",
    title: "Coolidge Presidency Begins",
    description:
      "Coolidge champions business-friendly policies during the consumer economy of the 1920s.",
  },
  {
    id: "stock-market-crash",
    year: 1929,
    dateLabel: "Oct 1929",
    era: "Great Depression",
    title: "Stock Market Crash",
    description:
      "The market collapse helps trigger the Great Depression and exposes economic weakness.",
  },
  {
    id: "fdr-elected",
    year: 1932,
    era: "New Deal",
    title: "Franklin D. Roosevelt Elected",
    description:
      "FDR wins the presidency and promises active federal response to the Great Depression.",
  },
  {
    id: "banking-act-1933",
    year: 1933,
    era: "New Deal",
    title: "Banking Act and FDIC",
    description:
      "New Deal banking reform creates deposit insurance and restores confidence in banks.",
  },
  {
    id: "new-deal-programs",
    year: 1933,
    era: "New Deal",
    title: "First New Deal Programs",
    description:
      "Agencies such as the AAA, PWA, and SEC expand federal action in agriculture, jobs, and markets.",
  },
  {
    id: "second-new-deal",
    year: 1934,
    era: "New Deal",
    title: "Second New Deal Begins",
    description:
      "The New Deal shifts toward work relief, labor protections, and a broader welfare state.",
  },
  {
    id: "neutrality-act-1935",
    year: 1935,
    era: "World War II",
    title: "Neutrality Act",
    description:
      "Congress tries to keep the United States out of another European war through neutrality legislation.",
  },
  {
    id: "selective-training-act",
    year: 1940,
    era: "World War II",
    title: "Selective Training and Service Act",
    description:
      "The United States creates its first peacetime draft as global war expands.",
  },
  {
    id: "lend-lease",
    year: 1941,
    era: "World War II",
    title: "Lend-Lease Act",
    description:
      "The United States supplies Allied nations while still short of formal entry into World War II.",
  },
  {
    id: "atlantic-charter",
    year: 1941,
    era: "World War II",
    title: "Atlantic Charter",
    description:
      "Roosevelt and Churchill outline Allied war aims and principles for the postwar world.",
  },
  {
    id: "pearl-harbor",
    year: 1941,
    dateLabel: "Dec 7, 1941",
    era: "World War II",
    title: "Pearl Harbor Attacked",
    description:
      "Japan attacks the U.S. naval base in Hawaii, bringing the United States into World War II.",
  },
  {
    id: "d-day",
    year: 1944,
    dateLabel: "Jun 6, 1944",
    era: "World War II",
    title: "D-Day",
    description:
      "Allied forces land in Normandy and open a western front against Nazi Germany.",
  },
  {
    id: "yalta-conference",
    year: 1945,
    dateLabel: "Feb 1945",
    era: "World War II",
    title: "Yalta Conference",
    description:
      "Allied leaders discuss the shape of Europe and the postwar order before Germany's defeat.",
  },
  {
    id: "fdr-dies",
    year: 1945,
    era: "World War II",
    title: "FDR Dies",
    description:
      "Harry Truman becomes president in the final months of World War II.",
  },
  {
    id: "hiroshima-nagasaki",
    year: 1945,
    dateLabel: "Aug 1945",
    era: "World War II",
    title: "Atomic Bombs Dropped",
    description:
      "The United States uses atomic bombs on Hiroshima and Nagasaki before Japan surrenders.",
  },
  {
    id: "truman-doctrine",
    year: 1947,
    era: "Cold War",
    title: "Truman Doctrine and Marshall Plan",
    description:
      "The United States commits to containment and funds European recovery after World War II.",
  },
  {
    id: "nato",
    year: 1949,
    era: "Cold War",
    title: "NATO Created",
    description:
      "The North Atlantic alliance formalizes U.S. commitment to collective defense against Soviet pressure.",
  },
  {
    id: "mccarthyism",
    year: 1950,
    era: "Cold War",
    title: "McCarthyism Begins",
    description:
      "Senator Joseph McCarthy's accusations intensify Cold War fears of communism at home.",
  },
  {
    id: "korean-war",
    year: 1950,
    era: "Cold War",
    title: "Korean War Begins",
    description:
      "The United States fights under the U.N. banner to contain communism on the Korean peninsula.",
  },
  {
    id: "brown-v-board",
    year: 1954,
    era: "Civil Rights",
    title: "Brown v. Board of Education",
    description:
      "The Supreme Court rules school segregation unconstitutional and energizes the civil rights movement.",
  },
  {
    id: "army-mccarthy",
    year: 1954,
    era: "Cold War",
    title: "Army-McCarthy Hearings",
    description:
      "Televised hearings damage McCarthy's credibility and help end the Red Scare's peak.",
  },
  {
    id: "suez-crisis",
    year: 1956,
    era: "Cold War",
    title: "Suez Crisis",
    description:
      "A Middle East crisis shows the changing balance of Cold War power and decolonization.",
  },
  {
    id: "sputnik",
    year: 1957,
    era: "Cold War",
    title: "Sputnik Launched",
    description:
      "The Soviet satellite shocks the United States and helps spur NASA and science education.",
  },
  {
    id: "u2-incident",
    year: 1960,
    era: "Cold War",
    title: "U-2 Incident",
    description:
      "A downed U.S. spy plane worsens tensions between the United States and the Soviet Union.",
  },
  {
    id: "jfk-president",
    year: 1961,
    era: "Cold War",
    title: "John F. Kennedy Takes Office",
    description:
      "Kennedy's presidency begins amid Cold War pressure and the Bay of Pigs failure.",
  },
  {
    id: "vietnam-conflict",
    year: 1961,
    era: "Cold War",
    title: "Vietnam Conflict Expands",
    description:
      "U.S. involvement in Vietnam deepens as Cold War containment shapes policy.",
  },
  {
    id: "cuban-missile-crisis",
    year: 1962,
    era: "Cold War",
    title: "Cuban Missile Crisis",
    description:
      "The United States and Soviet Union confront each other over missiles in Cuba.",
  },
  {
    id: "jfk-assassinated",
    year: 1963,
    era: "Civil Rights",
    title: "JFK Assassinated",
    description:
      "Kennedy is killed in Dallas, and Lyndon Johnson becomes president.",
  },
  {
    id: "civil-rights-act",
    year: 1964,
    era: "Civil Rights",
    title: "Civil Rights Act",
    description:
      "Federal law bans segregation in public accommodations and discrimination in employment.",
  },
  {
    id: "gulf-of-tonkin",
    year: 1964,
    era: "Cold War",
    title: "Gulf of Tonkin",
    description:
      "Congress gives Johnson broad authority to escalate U.S. involvement in Vietnam.",
  },
  {
    id: "great-society",
    year: 1965,
    era: "Civil Rights",
    title: "Great Society Legislation",
    description:
      "Johnson expands federal programs around poverty, health care, education, and civil rights.",
  },
  {
    id: "nixon-president",
    year: 1969,
    era: "Modern America",
    title: "Nixon Presidency Begins",
    description:
      "Richard Nixon enters office promising order, Vietnamization, and a new conservative direction.",
  },
  {
    id: "detente",
    year: 1969,
    era: "Cold War",
    title: "Detente Begins",
    description:
      "The United States pursues eased tensions with communist powers during the Nixon era.",
  },
  {
    id: "moon-landing",
    year: 1969,
    era: "Modern America",
    title: "Moon Landing",
    description:
      "Apollo 11 fulfills the space race goal of landing Americans on the moon.",
  },
  {
    id: "gold-standard",
    year: 1971,
    era: "Modern America",
    title: "U.S. Leaves the Gold Standard",
    description:
      "Nixon ends dollar convertibility to gold, reshaping the global monetary system.",
  },
  {
    id: "watergate",
    year: 1972,
    era: "Modern America",
    title: "Watergate Scandal Begins",
    description:
      "A break-in and cover-up unravel Nixon's presidency and damage trust in government.",
  },
  {
    id: "nixon-resigns",
    year: 1974,
    era: "Modern America",
    title: "Nixon Resigns",
    description:
      "Facing impeachment, Nixon becomes the first U.S. president to resign.",
  },
  {
    id: "ford-pardons-nixon",
    year: 1974,
    era: "Modern America",
    title: "Ford Pardons Nixon",
    description:
      "Gerald Ford takes office and issues a controversial pardon to Richard Nixon.",
  },
  {
    id: "carter-elected",
    year: 1977,
    era: "Modern America",
    title: "Jimmy Carter Elected",
    description:
      "Carter campaigns on honesty and human rights after the Watergate era.",
  },
  {
    id: "three-mile-island",
    year: 1979,
    era: "Modern America",
    title: "Three Mile Island Accident",
    description:
      "A nuclear power accident in Pennsylvania increases public concern over nuclear energy.",
  },
  {
    id: "reagan-elected",
    year: 1981,
    era: "Modern America",
    title: "Ronald Reagan Elected",
    description:
      "Reagan's presidency shifts policy toward tax cuts, deregulation, and renewed Cold War pressure.",
  },
  {
    id: "space-shuttle",
    year: 1981,
    era: "Modern America",
    title: "First Space Shuttle Launch",
    description:
      "NASA launches the reusable space shuttle program in the early Reagan years.",
  },
  {
    id: "sdi",
    year: 1983,
    era: "Modern America",
    title: "Strategic Defense Initiative",
    description:
      "Reagan proposes a missile defense system popularly called Star Wars.",
  },
  {
    id: "iran-contra",
    year: 1986,
    era: "Modern America",
    title: "Iran-Contra Scandal",
    description:
      "Secret arms sales and Contra funding create a major scandal for the Reagan administration.",
  },
  {
    id: "ghw-bush",
    year: 1989,
    era: "Modern America",
    title: "George H. W. Bush Elected",
    description:
      "Bush enters office as the Cold War nears its end and new foreign policy crises emerge.",
  },
  {
    id: "persian-gulf-war",
    year: 1990,
    era: "Modern America",
    title: "Persian Gulf War Begins",
    description:
      "The United States leads a coalition response after Iraq invades Kuwait.",
  },
  {
    id: "operation-desert-storm",
    year: 1991,
    era: "Modern America",
    title: "Operation Desert Storm",
    description:
      "Coalition forces drive Iraq out of Kuwait in a short, high-tech war.",
  },
  {
    id: "clinton-elected",
    year: 1993,
    era: "Modern America",
    title: "Bill Clinton Elected",
    description:
      "Clinton's presidency begins in a post-Cold War economy and a changing political culture.",
  },
  {
    id: "nafta",
    year: 1994,
    era: "Modern America",
    title: "NAFTA Established",
    description:
      "The North American Free Trade Agreement links the United States, Canada, and Mexico.",
  },
  {
    id: "george-w-bush",
    year: 2000,
    era: "Modern America",
    title: "George W. Bush Elected",
    description:
      "Bush wins the presidency after a disputed election and Supreme Court intervention.",
  },
  {
    id: "september-11",
    year: 2001,
    dateLabel: "Sept 11, 2001",
    era: "Modern America",
    title: "September 11 Attacks",
    description:
      "Terrorist attacks on New York and Washington reshape U.S. foreign and domestic policy.",
  },
  {
    id: "patriot-act",
    year: 2001,
    era: "Modern America",
    title: "Patriot Act",
    description:
      "Congress expands surveillance and law enforcement powers after the September 11 attacks.",
  },
];

export const EVENTS = RAW_EVENTS.map((event, index) => ({
  ...event,
  order: index,
  dateLabel: event.dateLabel ?? String(event.year),
}));

export const STARTING_EVENT_IDS = [
  "declaration-independence",
];
