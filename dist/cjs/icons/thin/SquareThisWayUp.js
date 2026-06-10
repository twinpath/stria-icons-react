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
var SquareThisWayUp_exports = {};
__export(SquareThisWayUp_exports, {
  default: () => SquareThisWayUp_default
});
module.exports = __toCommonJS(SquareThisWayUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareThisWayUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H384C419.344 480 448 451.346 448 416V96C448 60.654 419.344 32 384 32ZM432 416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416ZM376 384H72C67.594 384 64 387.578 64 392S67.594 400 72 400H376C380.406 400 384 396.422 384 392S380.406 384 376 384ZM69.656 189.656L120 139.312V312C120 316.422 123.594 320 128 320S136 316.422 136 312V139.312L186.344 189.656C187.906 191.219 189.938 192 192 192S196.094 191.219 197.656 189.656C200.781 186.531 200.781 181.469 197.656 178.344L133.656 114.344C130.531 111.219 125.469 111.219 122.344 114.344L58.344 178.344C55.219 181.469 55.219 186.531 58.344 189.656S66.531 192.781 69.656 189.656ZM325.656 114.344C322.531 111.219 317.469 111.219 314.344 114.344L250.344 178.344C247.219 181.469 247.219 186.531 250.344 189.656S258.531 192.781 261.656 189.656L312 139.312V312C312 316.422 315.594 320 320 320S328 316.422 328 312V139.312L378.344 189.656C379.906 191.219 381.938 192 384 192S388.094 191.219 389.656 189.656C392.781 186.531 392.781 181.469 389.656 178.344L325.656 114.344Z" })
  }
));
SquareThisWayUpThin.displayName = "SquareThisWayUpThin";
var SquareThisWayUp_default = SquareThisWayUpThin;
