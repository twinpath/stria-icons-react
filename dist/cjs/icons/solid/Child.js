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
const ChildSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.999 144C263.749 144 295.999 111.75 295.999 72S263.749 0 223.999 0S151.999 32.25 151.999 72S184.249 144 223.999 144ZM415.077 110.828C401.187 93.688 376.015 91.031 358.827 104.922L307.624 146.391C260.468 184.578 187.53 184.578 140.374 146.391L89.171 104.922C72.015 91 46.796 93.672 32.921 110.828C19.015 128 21.655 153.188 38.827 167.078L90.015 208.547C101.743 218.043 114.645 225.707 127.999 232.463V480C127.999 497.625 142.374 512 159.999 512H175.999C193.624 512 207.999 497.625 207.999 480V368H239.999V480C239.999 497.625 254.374 512 271.999 512H287.999C305.624 512 319.999 497.625 319.999 480V232.461C333.349 225.705 346.247 218.043 357.968 208.547L409.171 167.078C426.343 153.188 428.983 128 415.077 110.828Z" })
  }
));
ChildSolid.displayName = "ChildSolid";
var Child_default = ChildSolid;
