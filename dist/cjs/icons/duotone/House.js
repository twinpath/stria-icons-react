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
var House_exports = {};
__export(House_exports, {
  default: () => House_default
});
module.exports = __toCommonJS(House_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.977 74.541L64 270.516V448C64 483.346 92.654 512 128 512H447.971C483.316 512 511.971 483.346 511.971 448V270.531L287.977 74.541ZM351.16 346.625C351.16 358.5 341.535 368 329.785 368H244.541C232.793 368 223.168 358.375 223.168 346.625V261.375C223.168 249.5 232.793 240 244.541 240H329.785C341.535 240 351.16 249.5 351.16 261.375V346.625Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 256.008C576 280.487 553.802 287.998 543.984 287.998C536.516 287.998 529 285.404 522.922 280.092L288 74.541L53.078 280.092C46.99 285.396 39.477 288 32 288C22.374 287.998 0 280.385 0 256.008C0 248.629 2.671 239.142 10.922 231.908L266.922 7.922C272.953 2.641 280.477 0 288 0S303.047 2.641 309.078 7.922L416 101.473V47.984C416 39.156 423.156 31.984 431.998 31.984H495.994C504.838 31.984 511.994 39.156 511.994 47.984V185.463L565.078 231.908C573.344 239.155 576 248.643 576 256.008Z " })
    ]
  }
));
HouseDuotone.displayName = "HouseDuotone";
var House_default = HouseDuotone;
