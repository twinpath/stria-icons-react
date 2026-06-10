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
var Child_exports = {};
__export(Child_exports, {
  default: () => Child_default
});
module.exports = __toCommonJS(Child_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChildRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M427.358 105.812C419.514 95.094 404.436 92.828 393.811 100.641L325.421 150.797C266.202 194.234 181.796 194.234 122.577 150.797L54.186 100.641C43.561 92.828 28.483 95.094 20.639 105.812C12.811 116.5 15.124 131.516 25.811 139.359L94.202 189.516C104.907 197.369 116.286 203.889 127.999 209.613V488C127.999 501.25 138.749 512 151.999 512S175.999 501.25 175.999 488V384H271.999V488C271.999 501.25 282.749 512 295.999 512S319.999 501.25 319.999 488V209.613C331.712 203.889 343.09 197.369 353.795 189.516L422.186 139.359C432.874 131.516 435.186 116.5 427.358 105.812ZM271.999 336H175.999V226.084C191.661 229.586 207.614 232 223.999 232S256.337 229.586 271.999 226.084V336ZM223.999 144C263.749 144 295.999 111.75 295.999 72S263.749 0 223.999 0S151.999 32.25 151.999 72S184.249 144 223.999 144Z" })
  }
));
ChildRegular.displayName = "ChildRegular";
var Child_default = ChildRegular;
