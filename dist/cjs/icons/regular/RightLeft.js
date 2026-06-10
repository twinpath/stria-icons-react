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
var RightLeft_exports = {};
__export(RightLeft_exports, {
  default: () => RightLeft_default
});
module.exports = __toCommonJS(RightLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 152H352.105V232C352.105 241.547 357.758 250.188 366.502 254S385.428 256.078 392.406 249.594L504.334 145.594C514.555 136.094 514.555 119.906 504.334 110.406L392.406 6.406C385.428 -0.078 375.246 -1.812 366.502 2S352.105 14.453 352.105 24V104H24C10.75 104 0 114.75 0 128S10.75 152 24 152ZM488 360H159.895V280C159.895 270.453 154.242 261.812 145.498 258S126.572 255.922 119.594 262.406L7.666 366.406C-2.555 375.906 -2.555 392.098 7.666 401.594L119.594 505.594C126.572 512.078 136.754 513.812 145.498 510S159.895 497.547 159.895 488V408H488C501.25 408 512 397.25 512 384S501.25 360 488 360Z" })
  }
));
RightLeftRegular.displayName = "RightLeftRegular";
var RightLeft_default = RightLeftRegular;
