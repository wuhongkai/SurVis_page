﻿const generatedBibEntries = {
    "10.1162/neco.1997.9.8.1735": {
        "abstract": "\"{Learning to store information over extended time intervals by recurrent backpropagation takes a very long time, mostly because of insufficient, decaying error backflow. We briefly review Hochreiter's (1991) analysis of this problem, then address it by introducing a novel, efficient, gradient based method called long short-term memory (LSTM). Truncating the gradient where this does not do harm, LSTM can learn to bridge minimal time lags in excess of 1000 discrete-time steps by enforcing constant error flow through constant error carousels within special units. Multiplicative gate units learn to open and close access to the constant error flow. LSTM is local in space and time; its computational complexity per time step and weight is O. 1. Our experiments with artificial data involve local, distributed, real-valued, and noisy pattern representations. In comparisons with real-time recurrent learning, back propagation through time, recurrent cascade correlation, Elman nets, and neural sequence chunking, LSTM leads to many more successful runs, and learns much faster. LSTM also solves complex, artificial long-time-lag tasks that have never been solved by previous recurrent network algorithms.}\",",
        "author": "Hochreiter, Sepp and Schmidhuber, J\u00fcrgen",
        "doi": "10.1162/neco.1997.9.8.1735",
        "eprint": "https://direct.mit.edu/neco/article-pdf/9/8/1735/813796/neco.1997.9.8.1735.pdf",
        "issn": "0899-7667",
        "journal": "Neural Computation",
        "month": "11",
        "number": "8",
        "pages": "1735-1780",
        "title": "\"{Long Short-Term Memory}\",",
        "type": "article",
        "url": "https://doi.org/10.1162/neco.1997.9.8.1735",
        "volume": "9",
        "year": "1997"
    },
    "BahdanauDzmitry2016NMTb": {
        "abstract": "Neural machine translation is a recently proposed approach to machine translation. Unlike the traditional statistical machine translation, the neural machine translation aims at building a single neural network that can be jointly tuned to maximize the translation performance. The models proposed recently for neural machine translation often belong to a family of encoder-decoders and consists of an encoder that encodes a source sentence into a fixed-length vector from which a decoder generates a translation. In this paper, we conjecture that the use of a fixed-length vector is a bottleneck in improving the performance of this basic encoder-decoder architecture, and propose to extend this by allowing a model to automatically (soft-)search for parts of a source sentence that are relevant to predicting a target word, without having to form these parts as a hard segment explicitly. With this new approach, we achieve a translation performance comparable to the existing state-of-the-art phrase-based system on the task of English-to-French translation. Furthermore, qualitative analysis reveals that the (soft-)alignments found by the model agree well with our intuition.",
        "address": "Ithaca",
        "author": "Bahdanau, Dzmitry and Cho, Kyunghyun and Bengio, Yoshua",
        "copyright": "2016. This work is published under http://arxiv.org/licenses/nonexclusive-distrib/1.0/ (the \u201cLicense\u201d). Notwithstanding the ProQuest Terms and Conditions, you may use this content in accordance with the terms of the License.",
        "issn": "2331-8422",
        "journal": "arXiv.org",
        "keywords": "Encoders-Decoders ; English language ; Machine translation ; Neural networks ; Qualitative analysis ; Translations",
        "language": "eng",
        "publisher": "Cornell University Library, arXiv.org",
        "title": "Neural Machine Translation by Jointly Learning to Align and Translate",
        "type": "article",
        "year": "2016"
    },
    "DevlinJacob2019BPoD": {
        "abstract": "We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result, the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models for a wide range of tasks, such as question answering and language inference, without substantial task-specific architecture modifications. BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).",
        "address": "Ithaca",
        "author": "Devlin, Jacob and Ming-Wei, Chang and Lee, Kenton and Toutanova, Kristina",
        "copyright": "2019. This work is published under http://arxiv.org/licenses/nonexclusive-distrib/1.0/ (the \u201cLicense\u201d). Notwithstanding the ProQuest Terms and Conditions, you may use this content in accordance with the terms of the License.",
        "issn": "2331-8422",
        "journal": "arXiv.org",
        "keywords": "Human performance ; Language ; Natural language processing ; Representations ; Transformers",
        "language": "eng",
        "publisher": "Cornell University Library, arXiv.org",
        "title": "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
        "type": "article",
        "year": "2019"
    },
    "DosovitskiyAlexey2021AIiW": {
        "abstract": "While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of convolutional networks while keeping their overall structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.), Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring substantially fewer computational resources to train.",
        "address": "Ithaca",
        "author": "Dosovitskiy, Alexey and Beyer, Lucas and Kolesnikov, Alexander and Weissenborn, Dirk and Zhai, Xiaohua and Unterthiner, Thomas and Dehghani, Mostafa and Minderer, Matthias and Heigold, Georg and Gelly, Sylvain and Uszkoreit, Jakob and Houlsby, Neil",
        "copyright": "2021. This work is published under http://arxiv.org/licenses/nonexclusive-distrib/1.0/ (the \u201cLicense\u201d). Notwithstanding the ProQuest Terms and Conditions, you may use this content in accordance with the terms of the License.",
        "issn": "2331-8422",
        "journal": "arXiv.org",
        "keywords": "Computer vision ; Image classification ; Natural language processing ; Networks ; Object recognition ; Transformers",
        "language": "eng",
        "publisher": "Cornell University Library, arXiv.org",
        "title": "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
        "type": "article",
        "year": "2021"
    },
    "KingmaDiederikP2017AAMf": {
        "abstract": "We introduce Adam, an algorithm for first-order gradient-based optimization of stochastic objective functions, based on adaptive estimates of lower-order moments. The method is straightforward to implement, is computationally efficient, has little memory requirements, is invariant to diagonal rescaling of the gradients, and is well suited for problems that are large in terms of data and/or parameters. The method is also appropriate for non-stationary objectives and problems with very noisy and/or sparse gradients. The hyper-parameters have intuitive interpretations and typically require little tuning. Some connections to related algorithms, on which Adam was inspired, are discussed. We also analyze the theoretical convergence properties of the algorithm and provide a regret bound on the convergence rate that is comparable to the best known results under the online convex optimization framework. Empirical results demonstrate that Adam works well in practice and compares favorably to other stochastic optimization methods. Finally, we discuss AdaMax, a variant of Adam based on the infinity norm.",
        "address": "Ithaca",
        "author": "Kingma, Diederik P and Ba, Jimmy",
        "copyright": "2017. This work is published under http://arxiv.org/licenses/nonexclusive-distrib/1.0/ (the \u201cLicense\u201d). Notwithstanding the ProQuest Terms and Conditions, you may use this content in accordance with the terms of the License.",
        "issn": "2331-8422",
        "journal": "arXiv.org",
        "keywords": "Algorithms ; Computational geometry ; Computer memory ; Convergence ; Convexity ; Empirical analysis ; Optimization ; Parameters ; Rescaling",
        "language": "eng",
        "publisher": "Cornell University Library, arXiv.org",
        "title": "Adam: A Method for Stochastic Optimization",
        "type": "article",
        "year": "2017"
    },
    "PetersMatthewE2018Dcwr": {
        "abstract": "We introduce a new type of deep contextualized word representation that models both (1) complex characteristics of word use (e.g., syntax and semantics), and (2) how these uses vary across linguistic contexts (i.e., to model polysemy). Our word vectors are learned functions of the internal states of a deep bidirectional language model (biLM), which is pre-trained on a large text corpus. We show that these representations can be easily added to existing models and significantly improve the state of the art across six challenging NLP problems, including question answering, textual entailment and sentiment analysis. We also present an analysis showing that exposing the deep internals of the pre-trained network is crucial, allowing downstream models to mix different types of semi-supervision signals.",
        "address": "Ithaca",
        "author": "Peters, Matthew E and Neumann, Mark and Iyyer, Mohit and Gardner, Matt and Clark, Christopher and Lee, Kenton and Zettlemoyer, Luke",
        "copyright": "2018. This work is published under http://arxiv.org/licenses/nonexclusive-distrib/1.0/ (the \u201cLicense\u201d). Notwithstanding the ProQuest Terms and Conditions, you may use this content in accordance with the terms of the License.",
        "issn": "2331-8422",
        "journal": "arXiv.org",
        "keywords": "Data mining ; Representations ; Semantics ; Sentiment analysis",
        "language": "eng",
        "publisher": "Cornell University Library, arXiv.org",
        "title": "Deep contextualized word representations",
        "type": "article",
        "year": "2018"
    },
    "SutskeverIlya2014StSL": {
        "abstract": "Deep Neural Networks (DNNs) are powerful models that have achieved excellent performance on difficult learning tasks. Although DNNs work well whenever large labeled training sets are available, they cannot be used to map sequences to sequences. In this paper, we present a general end-to-end approach to sequence learning that makes minimal assumptions on the sequence structure. Our method uses a multilayered Long Short-Term Memory (LSTM) to map the input sequence to a vector of a fixed dimensionality, and then another deep LSTM to decode the target sequence from the vector. Our main result is that on an English to French translation task from the WMT'14 dataset, the translations produced by the LSTM achieve a BLEU score of 34.8 on the entire test set, where the LSTM's BLEU score was penalized on out-of-vocabulary words. Additionally, the LSTM did not have difficulty on long sentences. For comparison, a phrase-based SMT system achieves a BLEU score of 33.3 on the same dataset. When we used the LSTM to rerank the 1000 hypotheses produced by the aforementioned SMT system, its BLEU score increases to 36.5, which is close to the previous best result on this task. The LSTM also learned sensible phrase and sentence representations that are sensitive to word order and are relatively invariant to the active and the passive voice. Finally, we found that reversing the order of the words in all source sentences (but not target sentences) improved the LSTM's performance markedly, because doing so introduced many short term dependencies between the source and the target sentence which made the optimization problem easier.",
        "address": "Ithaca",
        "author": "Sutskever, Ilya and Vinyals, Oriol and Le, Quoc V",
        "copyright": "2014. This work is published under http://arxiv.org/licenses/nonexclusive-distrib/1.0/ (the \u201cLicense\u201d). Notwithstanding the ProQuest Terms and Conditions, you may use this content in accordance with the terms of the License.",
        "issn": "2331-8422",
        "journal": "arXiv.org",
        "keywords": "Learning ; Neural networks ; Optimization ; Sentences ; Short term ; Translations",
        "language": "eng",
        "publisher": "Cornell University Library, arXiv.org",
        "title": "Sequence to Sequence Learning with Neural Networks",
        "type": "article",
        "year": "2014"
    },
    "ThapakPrakhar2020T": {
        "abstract": "Recent advancements in attention mechanisms have replaced recurrent neural networks and its variants for machine translation tasks. Transformer using attention mechanism solely achieved state-of-the-art results in sequence modeling. Neural machine translation based on the attention mechanism is parallelizable and addresses the problem of handling long-range dependencies among words in sentences more effectively than recurrent neural networks. One of the key concepts in attention is to learn three matrices, query, key, and value, where global dependencies among words are learned through linearly projecting word embeddings through these matrices. Multiple query, key, value matrices can be learned simultaneously focusing on a different subspace of the embedded dimension, which is called multi-head in Transformer. We argue that certain dependencies among words could be learned better through an intermediate context than directly modeling word-word dependencies. This could happen due to the nature of certain dependencies or lack of patterns that lend them difficult to be modeled globally using multi-head self-attention. In this work, we propose a new way of learning dependencies through a context in multi-head using convolution. This new form of multi-head attention along with the traditional form achieves better results than Transformer on the WMT 2014 English-to-German and English-to-French translation tasks. We also introduce a framework to learn POS tagging and NER information during the training of encoder which further improves results achieving a new state-of-the-art of 32.1 BLEU, better than existing best by 1.4 BLEU, on the WMT 2014 English-to-German and 44.6 BLEU, better than existing best by 1.1 BLEU, on the WMT 2014 English-to-French translation tasks. We call this Transformer++.",
        "address": "Ithaca",
        "author": "Thapak, Prakhar and Hore, Prodip",
        "copyright": "2020. This work is published under http://arxiv.org/licenses/nonexclusive-distrib/1.0/ (the \u201cLicense\u201d). Notwithstanding the ProQuest Terms and Conditions, you may use this content in accordance with the terms of the License.",
        "issn": "2331-8422",
        "journal": "arXiv.org",
        "keywords": "Coders ; Convolution ; Machine translation ; Modelling ; Neural networks ; Recurrent neural networks ; Sentences ; Transformers ; Translations ; Words (language)",
        "language": "eng",
        "publisher": "Cornell University Library, arXiv.org",
        "title": "Transformer",
        "type": "article",
        "year": "2020"
    },
    "VaswaniAshish2017AIAY": {
        "abstract": "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles by over 2 BLEU. On the WMT 2014 English-to-French translation task, our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for 3.5 days on eight GPUs, a small fraction of the training costs of the best models from the literature. We show that the Transformer generalizes well to other tasks by applying it successfully to English constituency parsing both with large and limited training data.",
        "address": "Ithaca",
        "author": "Vaswani, Ashish and Shazeer, Noam and Parmar, Niki and Uszkoreit, Jakob and Jones, Llion and Gomez, Aidan N and Kaiser, Lukasz and Polosukhin, Illia",
        "copyright": "2017. This work is published under http://arxiv.org/licenses/nonexclusive-distrib/1.0/ (the \u201cLicense\u201d). Notwithstanding the ProQuest Terms and Conditions, you may use this content in accordance with the terms of the License.",
        "issn": "2331-8422",
        "journal": "arXiv.org",
        "keywords": "Artificial neural networks ; Configuration management ; Encoders-Decoders ; Machine translation ; Neural networks ; Training ; Transformers ; Translations",
        "language": "eng",
        "publisher": "Cornell University Library, arXiv.org",
        "title": "Attention Is All You Need",
        "type": "article",
        "year": "2017"
    },
    "radford2019language": {
        "author": "Radford, Alec and Wu, Jeffrey and Child, Rewon and Luan, David and Amodei, Dario and Sutskever, Ilya and others",
        "journal": "OpenAI blog",
        "number": "8",
        "pages": "9",
        "title": "Language models are unsupervised multitask learners",
        "type": "article",
        "volume": "1",
        "year": "2019"
    }
};