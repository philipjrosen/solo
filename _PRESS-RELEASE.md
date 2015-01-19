# cyk-js #

<!-- 
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows. 

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->
 
## CYK-JS ##

## Audience ##
 Computational Linguists and Software Engineers who want to generate parse-trees for English sentences 

## Summary ##
The Cocke–Younger–Kasami (CYK) algorithm is a parsing algorithm for context-free grammars (CFGs). It employs bottom-up parsing and dynamic programming. This module implments the standard version of CYK  which operates only on context-free grammars given in Chomsky normal form (CNF). The importance of the CYK algorithm stems from its high efficiency in certain situations. 

## Problem ##
Currently there is no JavaScript library that implements this algorithm. This is painful for developers who would like to build parse-trees for use in other types of linguistic analysis or in order to use them as inputs to front-end data visualization libraries such as d3.

## Solution ##
Implementing the algorithm from the gorund up using JavaScript and making use of the advantageous features of JS for this purpose will make the implementation accessible to developer who work primarily in JS as well as create easy access to those who wish to make open source contributions to this module.

## Quote from You ##
  > A quote from a spokesperson in your company.

## How to Get Started ##
  > Describe how easy it is to get started.

## Customer Quote ##
  > Provide a quote from a hypothetical customer that describes how they experienced the benefit.

## Closing and Call to Action ##
  > Wrap it up and give pointers where the reader should go next.
