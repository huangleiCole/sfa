//
//  WXWebViewController.m
//  Flipboard
//
//  Created by Ryan Olson on 6/10/14.
//  Copyright (c) 2014 Flipboard. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface WXWebViewController : UIViewController

- (id)initWithURL:(NSURL *)url;
- (id)initWithText:(NSString *)text;

+ (BOOL)supportsPathExtension:(NSString *)extension;

@end
