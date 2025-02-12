import { View } from "react-native"
import { Card, CardProps } from "./Card.tsx"

// https://lets-emoji.com/emojilist/emojilist-3/
const cards: CardProps[] = [
  { emoji: '👧', name: 'ユナ' },
  { emoji: '👧', name: 'ゆな' },
  { emoji: '👧', name: '結心' },
  { emoji: '👧', name: 'Yuna' },
  { emoji: '👧', name: 'YUNA' },
  { emoji: '🎅', name: 'サンタ' },
  { emoji: '🦀', name: 'かに' },
  { emoji: '🐟', name: 'さかな' },
  { emoji: '🐡', name: 'ふぐ' },
  { emoji: '🐠', name: 'さかな２' },
  { emoji: '🎣', name: 'つり' },
  { emoji: '🦐', name: 'えび' },
  { emoji: '🦞', name: 'ざりがに' },
  { emoji: '🐳', name: 'くじら' },
  { emoji: '🐋', name: 'くじら２' },
  { emoji: '🦈', name: 'さめ' },
  { emoji: '🐬', name: 'いるか' },
  { emoji: '🐙', name: 'たこ' },
  { emoji: '🦑', name: 'いか' },
  { emoji: '🪼', name: 'くらげ' },
  { emoji: '🐼', name: 'ぱんだ' },
  { emoji: '🦌', name: 'しか' },
  { emoji: '🫎', name: 'へらじか' },
  { emoji: '🦁', name: 'らいおん' },
  { emoji: '🐅', name: 'とら' },
  { emoji: '🐆', name: 'ひょう' },
  { emoji: '🦉', name: 'ふくろう' },
  { emoji: '🪿', name: 'あひる' },
  { emoji: '🦢', name: 'がちょう' },
  { emoji: '🦆', name: 'かも' },
  { emoji: '🐦‍⬛', name: 'からす' },
  { emoji: '🦋', name: 'ちょうちょう' },
  { emoji: '🦛', name: 'かば' },
  { emoji: '🐘', name: 'ぞう' },
  { emoji: '🦣', name: 'まんもす' },
  { emoji: '🦏', name: 'さい' },
  { emoji: '🐂', name: 'うし' },
  { emoji: '🐃', name: 'すいぎゅう' },
  { emoji: '🐎', name: 'うま' },
  { emoji: '🦬', name: 'ばいそん' },
  { emoji: '🐑', name: 'ひつじ' },
  { emoji: '🐏', name: 'おひつじ' },
  { emoji: '🐐', name: 'やぎ' },
  { emoji: '🐪', name: 'らくだ' },
  { emoji: '🐫', name: 'らくだ２' },
  { emoji: '🦙', name: 'らま' },
  { emoji: '🐕‍🦺', name: 'いぬ' },
  { emoji: '🐁', name: 'ねずみ' },
  { emoji: '🐀', name: 'らっと' },
  { emoji: '🐹', name: 'はむすたー' },
  { emoji: '🐇', name: 'うさぎ' },
  { emoji: '🐿️', name: 'りす' },
  { emoji: '🦫', name: 'びーばー' },
  { emoji: '🦔', name: 'はりねずみ' },
  { emoji: '🦇', name: 'こうもり' },
  { emoji: '🦒', name: 'きりん' },
  { emoji: '🐻', name: 'くま' },
  { emoji: '🐻‍❄️', name: 'しろくま' },
  { emoji: '🐨', name: 'こあら' },
  { emoji: '🦥', name: 'なまけもの' },
  { emoji: '🦥', name: 'かわうそ' },
  { emoji: '🐈', name: 'ねこ' },
  { emoji: '🦓', name: 'しまうま' },
  { emoji: '🫏', name: 'ろば' },
  { emoji: '🐒', name: 'さる' },
  { emoji: '🦍', name: 'ごりら' },
  { emoji: '🦊', name: 'きつね' },
  { emoji: '🐺', name: 'おおかみ' },
  { emoji: '🐖', name: 'ぶた' },
  { emoji: '🐗', name: 'いのしし' },
  { emoji: '🦨', name: 'すかんく' },
  { emoji: '🦘', name: 'かんがるー' },
  { emoji: '🦡', name: 'あなぐま' },
  { emoji: '🦝', name: 'たぬき' },
  { emoji: '🐔', name: 'にわとり' },
  { emoji: '🐤', name: 'ひよこ' },
  { emoji: '🐸', name: 'かえる' },

]

export function Cards() {

  return (
    <View className="gap-1">
      { 
        cards.map((card) => 
          <Card 
            key={card.name} 
            emoji={card.emoji} 
            name={card.name} 
          /> 
        )
      }
    </View>
  )
}