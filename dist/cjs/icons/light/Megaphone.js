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
var Megaphone_exports = {};
__export(Megaphone_exports, {
  default: () => Megaphone_default
});
module.exports = __toCommonJS(Megaphone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MegaphoneLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 160C7.164 160 0 167.162 0 176V336C0 344.836 7.164 352 16 352S32 344.836 32 336V176C32 167.162 24.836 160 16 160ZM560 32C551.164 32 544 39.162 544 48V59.375L64 172.227V205.102L544 92.25V419.75L64 306.898V339.752L162.625 362.875C161 369.75 160 376.75 160 384C160 437 203 480 256 480C301.125 480 338.5 448.75 348.625 406.75L544 452.625V464C544 472.836 551.164 480 560 480S576 472.836 576 464V48C576 39.162 568.836 32 560 32ZM256 448C220.75 448 192 419.25 192 384C192 379.25 192.75 374.75 193.75 370.25L317.875 399.5C310.875 427.25 285.875 448 256 448Z" })
  }
));
MegaphoneLight.displayName = "MegaphoneLight";
var Megaphone_default = MegaphoneLight;
