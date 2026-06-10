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
var GiftCard_exports = {};
__export(GiftCard_exports, {
  default: () => GiftCard_default
});
module.exports = __toCommonJS(GiftCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GiftCardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 128H469.875C482.384 103.983 485.379 73.957 466.835 41.931C451.121 14.793 422.348 -0.259 390.99 0.004C349.938 0.349 323.22 21.756 289 68.375C254.769 21.742 227.922 0.335 186.847 0.004C155.501 -0.249 126.746 14.805 111.039 41.933C92.496 73.958 95.491 103.983 108 128H64C28.654 128 0 156.654 0 192V448C0 483.346 28.654 512 64 512H512C547.346 512 576 483.346 576 448V192C576 156.654 547.346 128 512 128ZM392 48C414 48 432 66.001 432 88C432 110.001 414 128 392 128H305.875C357.25 51.5 371.625 48 392 48ZM145.875 88C145.875 66.001 163.875 48 185.875 48C205.875 48 220.5 51.25 272 128H185.875C163.875 128 145.875 110.001 145.875 88ZM222 176L175.971 222.14C166.637 231.497 166.646 246.646 175.992 255.992L175.997 255.997C185.35 265.35 200.513 265.356 209.874 256.01L288 178.001L366.135 256.018C375.49 265.36 390.646 265.354 399.994 256.006L399.994 256.006C409.348 246.652 409.357 231.491 400.015 222.126L354 176H512C520.837 176 528 183.163 528 192V320H48V192C48 183.163 55.163 176 64 176H222ZM48 448V384H528V448C528 456.837 520.837 464 512 464H64C55.163 464 48 456.837 48 448Z" })
  }
));
GiftCardRegular.displayName = "GiftCardRegular";
var GiftCard_default = GiftCardRegular;
