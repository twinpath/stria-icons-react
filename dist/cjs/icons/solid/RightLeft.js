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
const RightLeftSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 168H351.895V232C351.895 241.547 357.555 250.188 366.312 254C375.066 257.812 385.258 256.078 392.25 249.594L504.32 145.594C514.559 136.094 514.559 119.906 504.32 110.406L392.25 6.406C385.258 -0.078 375.066 -1.812 366.312 1.996C357.555 5.812 351.895 14.453 351.895 24V88H40C17.906 88 0 105.906 0 128S17.906 168 40 168ZM472 344H160.105V280C160.105 270.453 154.445 261.812 145.688 258C136.934 254.188 126.742 255.922 119.75 262.406L7.68 366.406C-2.559 375.906 -2.559 392.094 7.68 401.594L119.75 505.594C126.742 512.078 136.934 513.812 145.688 510C154.445 506.188 160.105 497.547 160.105 488V424H472C494.094 424 512 406.094 512 384S494.094 344 472 344Z" })
  }
));
RightLeftSolid.displayName = "RightLeftSolid";
var RightLeft_default = RightLeftSolid;
