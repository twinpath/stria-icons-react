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
var Paste_exports = {};
__export(Paste_exports, {
  default: () => Paste_default
});
module.exports = __toCommonJS(Paste_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PasteThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.629 246.627L409.371 153.373C403.371 147.371 395.23 144 386.746 144H256C229.49 144 208 165.49 208 192V464C208 490.51 229.492 512 256 512H464C490.508 512 512 490.51 512 464V269.254C512 260.768 508.629 252.629 502.629 246.627ZM400 166.629L489.375 256H424C410.781 256 400 245.234 400 232V166.629ZM496 464C496 481.645 481.645 496 464 496H256C238.355 496 224 481.645 224 464V192C224 174.355 238.355 160 256 160H384V232C384 254.062 401.938 272 424 272H496V464ZM16 400V112C16 94.327 30.327 80 48 80H64V88C64 101.255 74.745 112 88 112H232C245.255 112 256 101.255 256 88V80H272C287.399 80 300.257 90.876 303.311 105.365C304.113 109.169 307.273 112 311.16 112H311.188C316.087 112 320.052 107.595 319.117 102.786C314.82 80.684 295.358 64 272 64H256V56C256 42.745 245.255 32 232 32H205.062C198.451 13.4 180.869 0 160 0S121.549 13.4 114.938 32H88C74.745 32 64 42.745 64 56V64H48C21.49 64 0 85.49 0 112V400C0 426.51 21.49 448 48 448H168C172.418 448 176 444.418 176 440L176 440C176 435.582 172.418 432 168 432H48C30.327 432 16 417.673 16 400ZM80 56C80 51.588 83.59 48 88 48H114.938H126.232L130.014 37.357C134.555 24.582 146.605 16 160 16S185.445 24.582 189.986 37.357L193.77 48H205.063H232C236.412 48 240 51.588 240 56V88C240 92.41 236.412 96 232 96H88C83.59 96 80 92.41 80 88V56Z" })
  }
));
PasteThin.displayName = "PasteThin";
var Paste_default = PasteThin;
