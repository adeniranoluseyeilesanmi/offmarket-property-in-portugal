import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Bot, SendIcon, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [conversation, setConversation] = useState<{role: string, content: string}[]>([
    {
      role: "assistant",
      content: "Olá! Sou o seu assistente de IA para sourcing de propriedades no mercado português. Posso ajudá-lo a encontrar propriedades fora do mercado, analisar negócios potenciais, conectar com proprietários, e fornecer insights sobre financiamento do vendedor e o mercado português. Como posso ajudar hoje?"
    }
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message to conversation
    const userMessage = { role: "user", content: input };
    setConversation([...conversation, userMessage]);
    setInput("");
    
    // Simulate AI thinking
    setIsThinking(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "Identifiquei 3 propriedades em Lisboa e Porto com financiamento do vendedor disponível. Taxas entre 3,8-5,2% com entradas de 15-30%. O mercado português mostra rendimentos de arrendamento de 4-6% anualmente. Quer que analise o potencial ROI?",
        "Posso ajudar a redigir uma mensagem personalizada ao proprietário em Cascais. Parece motivado para vender devido a emigração para o Brasil. O financiamento do vendedor com entrada de 25% pode ser negociado para 20% considerando o mercado atual português.",
        "O mercado imobiliário português cresceu 12% anualmente em localizações premium. Com base em vendas comparáveis no Algarve, renovação pode render lucro de 20-25%, especialmente com o visto D7 impulsionando a procura internacional e opções de financiamento flexíveis.",
        "Analisei a situação do proprietário - precisa de venda rápida devido a relocalização para a Alemanha. A lei portuguesa permite termos de negociação flexíveis para financiamento do vendedor. Quer que sugira estratégias baseadas em transações similares com seller finance?",
        "Propriedades nesta região do Norte de Portugal beneficiam de incentivos fiscais para renovação do interior. Tempo médio para vender propriedades fora do mercado é 18 dias, com forte procura de compradores nacionais e internacionais. Financiamento do vendedor acelera o processo.",
        "O financiamento do vendedor em Portugal requer contrato específico (compra e venda com pagamento diferido). Taxa IMI não é afetada, mas requer notário. Golden Visa é compatível com seller finance. Quer detalhes sobre os aspectos legais?",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      setConversation(prev => [...prev, { 
        role: "assistant", 
        content: randomResponse
      }]);
      
      setIsThinking(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50 bg-property-blue hover:bg-property-dark-blue"
        >
          <Bot size={24} />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 w-[350px] sm:w-[400px] max-h-[500px] shadow-xl z-50 flex flex-col">
          <CardHeader className="bg-property-blue text-white py-3 px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Sparkles size={18} className="mr-2" />
                <CardTitle className="text-base font-medium">Assistente IA - Portugal</CardTitle>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 text-white hover:bg-property-dark-blue"
                onClick={() => setIsOpen(false)}
              >
                <X size={16} />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[320px]">
            {conversation.map((message, index) => (
              <div 
                key={index}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div 
                  className={cn(
                    "rounded-lg py-2 px-3 max-w-[80%]",
                    message.role === "user" 
                      ? "bg-property-blue text-white" 
                      : "bg-gray-100 text-gray-800"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg py-2 px-3">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="p-3 border-t">
            <div className="flex w-full items-center space-x-2">
              <Textarea 
                placeholder="Pergunte sobre sourcing de propriedades e financiamento..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[40px] resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button 
                size="icon" 
                onClick={handleSendMessage}
                disabled={!input.trim() || isThinking}
              >
                <SendIcon size={18} />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default AIAssistant;
