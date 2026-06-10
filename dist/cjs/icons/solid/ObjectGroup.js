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
var ObjectGroup_exports = {};
__export(ObjectGroup_exports, {
  default: () => ObjectGroup_default
});
module.exports = __toCommonJS(ObjectGroup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ObjectGroupSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 128C504.838 128 512 120.836 512 112V48C512 39.164 504.838 32 496 32H432C423.164 32 416 39.164 416 48V64H96V48C96 39.164 88.838 32 80 32H16C7.164 32 0 39.164 0 48V112C0 120.836 7.164 128 16 128H32V384H16C7.164 384 0 391.164 0 400V464C0 472.836 7.164 480 16 480H80C88.838 480 96 472.836 96 464V448H416V464C416 472.836 423.164 480 432 480H496C504.838 480 512 472.836 512 464V400C512 391.164 504.838 384 496 384H480V128H496ZM96 272V144C96 135.164 103.164 128 112 128H272C280.838 128 288 135.164 288 144V272C288 280.836 280.838 288 272 288H112C103.164 288 96 280.836 96 272ZM416 368C416 376.836 408.838 384 400 384H240C231.164 384 224 376.836 224 368V320H296C309.256 320 320 309.254 320 296V224H400C408.838 224 416 231.164 416 240V368Z" })
  }
));
ObjectGroupSolid.displayName = "ObjectGroupSolid";
var ObjectGroup_default = ObjectGroupSolid;
