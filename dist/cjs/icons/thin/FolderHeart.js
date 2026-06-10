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
var FolderHeart_exports = {};
__export(FolderHeart_exports, {
  default: () => FolderHeart_default
});
module.exports = __toCommonJS(FolderHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderHeartThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L217.375 41.375C211.371 35.371 203.234 32 194.746 32H48C21.492 32 0 53.492 0 80V432C0 458.508 21.492 480 48 480H464C490.508 480 512 458.508 512 432V144C512 117.492 490.508 96 464 96ZM496 432C496 449.672 481.672 464 464 464H48C30.328 464 16 449.672 16 432V80C16 62.328 30.328 48 48 48H188.117C196.602 48 204.742 51.371 210.742 57.371L265.371 112H464C481.672 112 496 126.328 496 144V432ZM258.562 213.328L255.875 216.109L253.188 213.312C228.344 187.641 188.469 184.859 162.438 207.047C147.844 219.516 139.281 237.016 138.344 256.328C137.438 275.453 144.438 294.234 157.594 307.875L240.625 393.469C244.719 397.672 250.188 399.984 255.969 400H256C261.812 400 267.25 397.688 271.438 393.438L354.406 307.875V307.859C367.562 294.219 374.562 275.438 373.625 256.297C372.656 236.984 364.094 219.484 349.469 207.047C323.562 184.844 283.562 187.594 258.562 213.328ZM342.906 296.75L259.969 382.266C258.875 383.391 257.469 384 256 384S253.156 383.391 252.094 382.312L169.094 296.766C159 286.297 153.625 271.828 154.344 257.094C155.062 242.234 161.625 228.781 172.812 219.219C181.594 211.719 192.531 208.047 203.656 208.047C217.312 208.047 231.188 213.609 241.688 224.422L255.875 239.172L270.031 224.453C289.25 204.813 319.531 202.484 339.063 219.219C350.313 228.781 356.906 242.234 357.656 257.094C358.375 271.828 353 286.266 342.906 296.75Z" })
  }
));
FolderHeartThin.displayName = "FolderHeartThin";
var FolderHeart_default = FolderHeartThin;
