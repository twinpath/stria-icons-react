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
var TextSize_exports = {};
__export(TextSize_exports, {
  default: () => TextSize_default
});
module.exports = __toCommonJS(TextSize_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextSizeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 248V296C320 309.25 330.75 320 344 320S368 309.25 368 296V272H456V432H424C410.75 432 400 442.75 400 456S410.75 480 424 480H536C549.25 480 560 469.25 560 456S549.25 432 536 432H504V272H592V296C592 309.25 602.75 320 616 320S640 309.25 640 296V248C640 234.75 629.25 224 616 224H344C330.75 224 320 234.75 320 248ZM0 56L0 136C0 149.25 10.75 160 24 160S48 149.25 48 136V80H168V432H120C106.75 432 96 442.75 96 456S106.75 480 120 480H264C277.25 480 288 469.25 288 456S277.25 432 264 432H216V80H336V136C336 149.25 346.75 160 360 160S384 149.25 384 136V56C384 42.75 373.25 32 360 32H24C10.75 32 0 42.75 0 56Z" })
  }
));
TextSizeRegular.displayName = "TextSizeRegular";
var TextSize_default = TextSizeRegular;
