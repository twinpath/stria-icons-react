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
const RightLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M471.999 344H160.104V280C160.104 270.453 154.444 261.812 145.687 258C136.933 254.188 126.741 255.922 119.749 262.406L7.679 366.406C-2.56 375.906 -2.56 392.094 7.679 401.594L119.749 505.594C126.741 512.078 136.933 513.812 145.687 510C154.444 506.188 160.104 497.547 160.104 488V424H471.999C494.093 424 511.999 406.094 511.999 384S494.093 344 471.999 344Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 168H351.895V232C351.895 241.547 357.555 250.188 366.312 254C375.066 257.812 385.258 256.078 392.25 249.594L504.32 145.594C514.559 136.094 514.559 119.906 504.32 110.406L392.25 6.406C385.258 -0.078 375.066 -1.812 366.312 1.996C357.555 5.812 351.895 14.453 351.895 24V88H40C17.906 88 0 105.906 0 128S17.906 168 40 168Z" })
    ]
  }
));
RightLeftDuotone.displayName = "RightLeftDuotone";
var RightLeft_default = RightLeftDuotone;
