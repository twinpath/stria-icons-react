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
var Home_exports = {};
__export(Home_exports, {
  default: () => Home_default
});
module.exports = __toCommonJS(Home_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.971 270.531V480C511.971 497.672 497.643 512 479.971 512H383.98C366.307 512 351.98 497.672 351.98 480V367.994C351.98 359.158 344.818 351.994 335.982 351.994H239.988C231.152 351.994 223.988 359.158 223.988 367.994V480C223.988 497.672 209.662 512 191.988 512H96C78.326 512 64 497.672 64 480V270.516L287.977 74.541L511.971 270.531Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 256.01C576 280.488 553.738 287.998 543.984 287.998C536.515 287.998 529 285.405 522.921 280.093L288 74.542L53.079 280.093C46.991 285.396 39.479 288 32.005 288C23.533 288 0 281.286 0 256.01C0 248.631 2.669 239.143 10.922 231.908L266.922 7.921C272.953 2.64 280.477 0 288 0C295.524 0 303.047 2.641 309.078 7.921L565.078 231.908C573.338 239.149 576 248.632 576 256.01Z " })
    ]
  }
));
HomeDuotone.displayName = "HomeDuotone";
var Home_default = HomeDuotone;
