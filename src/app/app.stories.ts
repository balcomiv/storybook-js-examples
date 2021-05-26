import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { AppComponent } from './app.component';

// 👇 This default export determines where your story goes in the story list
export default {
  title: 'Test/It',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
    }),
    // With template
    // componentWrapperDecorator(
    //   (story) =>
    //     `<div style="border: 1px solid green; height: 200px;">${story}</div>`
    // ),
    // With component which contains ng-content
    // componentWrapperDecorator(AppComponent),
  ],
} as Meta;

// 👇 We create a “template” of how args map to rendering
const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

export const withTemplateBind = Template.bind({});

withTemplateBind.args = {
  /* 👇 The args you need here will depend on your component */
};

// export const withCustomTemplate: Story<AppComponent> = (args) => ({
//   template: '<app-root></app-root>',
// });

//  Also
//
// const Template: Story<AppComponent> = (args) => ({
//   props: args,
//   template: '<app-root [title]="title"></app-root>',
// });

// const Component: Story<AppComponent> = (args) => ({
//   props: args,
// });
