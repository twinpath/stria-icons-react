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
var MessageImage_exports = {};
__export(MessageImage_exports, {
  default: () => MessageImage_default
});
module.exports = __toCommonJS(MessageImage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageImageDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.748 0 63.994V352C0 387.246 28.75 415.994 64 415.994H160V499.959C160 509.709 171.25 515.461 179.125 509.709L304 415.994H448C483.25 415.994 512 387.246 512 352V63.994C512 28.748 483.25 0 448 0ZM128 96C145.674 96 160 110.328 160 128S145.674 160 128 160S96 145.672 96 128S110.326 96 128 96ZM414.121 311.551C411.336 316.754 405.914 320 400.014 320H112.014C105.992 320 100.48 316.621 97.752 311.25C95.021 305.883 95.537 299.438 99.086 294.574L169.086 198.574C172.098 194.441 176.902 192 182.014 192S191.93 194.441 194.941 198.574L217.297 229.234L280.035 135.125C283.002 130.672 287.998 128 293.348 128S303.693 130.672 306.66 135.125L413.326 295.125C416.6 300.035 416.904 306.348 414.121 311.551Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M414.108 311.551C411.323 316.754 405.901 320 400 320H112C105.979 320 100.467 316.621 97.739 311.25C95.008 305.883 95.524 299.438 99.073 294.574L169.073 198.574C172.084 194.441 176.889 192 182 192S191.916 194.441 194.928 198.574L217.284 229.234L280.022 135.125C282.989 130.672 287.985 128 293.334 128S303.68 130.672 306.647 135.125L413.313 295.125C416.586 300.035 416.891 306.348 414.108 311.551Z" })
    ]
  }
));
MessageImageDuotone.displayName = "MessageImageDuotone";
var MessageImage_default = MessageImageDuotone;
