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
var HandPointLeft_exports = {};
__export(HandPointLeft_exports, {
  default: () => HandPointLeft_default
});
module.exports = __toCommonJS(HandPointLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandPointLeftSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 288H192C174.328 288 160 302.312 160 320S174.328 352 192 352H256C273.672 352 288 337.688 288 320S273.672 288 256 288ZM240 232V192H160C142.328 192 128 206.312 128 224S142.328 256 160 256H244.41C241.729 248.459 240 240.459 240 232ZM240 104C240 101.26 240.508 98.66 240.807 96H32C14.328 96 0 110.312 0 128S14.328 160 32 160H240V104ZM224 448H288C305.672 448 320 433.688 320 416S305.672 384 288 384H224C206.328 384 192 398.312 192 416S206.328 448 224 448ZM352 416C352 427.717 348.619 438.553 343.121 448H376C451.111 448 512 387.111 512 312V223.281C512 194.516 502.893 166.489 485.984 143.219L459.531 106.812C439.969 80 408.531 64 375.406 64H312C289.909 64 272 81.909 272 104V232C272 254.094 289.906 272 312 272C340.734 272 352 245.28 352 229.724L352 160C352 151.163 359.163 144 368 144H368C376.837 144 384 151.163 384 160V232C384 269.869 354.646 300.594 317.49 303.447C318.92 308.762 320 314.234 320 320C320 333.275 315.953 345.602 309.031 355.826C333.986 364.559 352 388.066 352 416Z" })
  }
));
HandPointLeftSolid.displayName = "HandPointLeftSolid";
var HandPointLeft_default = HandPointLeftSolid;
