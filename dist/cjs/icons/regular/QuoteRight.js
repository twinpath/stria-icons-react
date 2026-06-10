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
var QuoteRight_exports = {};
__export(QuoteRight_exports, {
  default: () => QuoteRight_default
});
module.exports = __toCommonJS(QuoteRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuoteRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 32H64C28.654 32 0 60.654 0 96V192C0 227.346 28.654 256 64 256H160C165.559 256 170.857 255.068 176 253.736V328C176 385.344 129.344 432 72 432H56C42.75 432 32 442.75 32 456S42.75 480 56 480H72C155.812 480 224 411.812 224 328V96C224 60.654 195.346 32 160 32ZM176 192C176 200.822 168.822 208 160 208H64C55.178 208 48 200.822 48 192V96C48 87.178 55.178 80 64 80H160C168.822 80 176 87.178 176 96V192ZM448 32H352C316.654 32 288 60.654 288 96V192C288 227.346 316.654 256 352 256H448C453.559 256 458.857 255.068 464 253.736V328C464 385.344 417.344 432 360 432H344C330.75 432 320 442.75 320 456S330.75 480 344 480H360C443.812 480 512 411.812 512 328V96C512 60.654 483.346 32 448 32ZM464 192C464 200.822 456.822 208 448 208H352C343.178 208 336 200.822 336 192V96C336 87.178 343.178 80 352 80H448C456.822 80 464 87.178 464 96V192Z" })
  }
));
QuoteRightRegular.displayName = "QuoteRightRegular";
var QuoteRight_default = QuoteRightRegular;
