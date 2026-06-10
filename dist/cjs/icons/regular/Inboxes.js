var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Inboxes_exports = {};
__export(Inboxes_exports, {
  default: () => Inboxes_default
});
module.exports = __toCommonJS(Inboxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M500.875 82.65L446.393 17.271C437.273 6.328 423.764 0 409.518 0H102.482C88.236 0 74.729 6.328 65.607 17.271L11.125 82.65C3.938 91.275 0 102.148 0 113.379V224C0 259.346 28.654 288 64 288H448C483.348 288 512 259.346 512 224V113.379C512 102.148 508.064 91.275 500.875 82.65ZM102.482 48H409.52L449.518 96H368C358.906 96 350.594 101.125 346.531 109.281L321.156 160H190.844L165.469 109.281C161.406 101.125 153.094 96 144 96H62.482L102.482 48ZM464 224C464 232.822 456.822 240 448 240H64C55.178 240 48 232.822 48 224V144H129.156L154.531 194.719C158.594 202.875 166.906 208 176 208H336C345.094 208 353.406 202.875 357.469 194.719L382.844 144H464V224ZM464 320H368C358.906 320 350.594 325.125 346.531 333.281L321.156 384H190.844L165.469 333.281C161.406 325.125 153.094 320 144 320H32C14.328 320 0 334.326 0 352V448C0 483.346 28.654 512 64 512H448C483.348 512 512 483.346 512 448V368C512 341.49 490.51 320 464 320ZM464 448C464 456.822 456.822 464 448 464H64C55.178 464 48 456.822 48 448V368H129.156L154.531 418.719C158.594 426.875 166.906 432 176 432H336C345.094 432 353.406 426.875 357.469 418.719L382.844 368H464V448Z" })
  }
));
InboxesRegular.displayName = "InboxesRegular";
var Inboxes_default = InboxesRegular;
