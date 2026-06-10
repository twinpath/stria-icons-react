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
var PersonToPortal_exports = {};
__export(PersonToPortal_exports, {
  default: () => PersonToPortal_default
});
module.exports = __toCommonJS(PersonToPortal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonToPortalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 0C377.25 0 332.125 34.875 322.125 188.875V188.75C312.875 158.5 288.125 135.625 257.25 128.625L179 110.875C153.375 105 126.5 111 105.75 127.125L57.375 164.5C46.875 172.5 45 187.625 53.125 198.125S76.25 210.5 86.75 202.375L135.125 165C144.625 157.75 156.875 155.125 168.5 157.625L183.375 161L148 248.375C137.625 273.875 147.375 303.125 171 317.25L254.75 367.875C257.125 369.5 258.5 372 258.625 374.75C258.625 375.5 258.5 376.25 258.375 377L225 481.375C223.25 487.5 224 494.125 227.125 499.625C230.25 505.25 235.375 509.375 241.5 511.125C243.75 511.625 245.875 512 248.125 512C258.875 512 268.25 504.875 271.25 494.625L304.5 390.125C311.5 365.75 301.25 339.875 279.625 326.75L227.75 295.5L269.75 190.75C272.5 194.25 274.75 198.375 276.125 202.75L290.125 248.75C297.25 272.375 318.75 287.75 343.5 287.875L391.875 288H392C405.25 288 416 277.25 416 264.125C416 250.875 405.375 240.625 392 240.5H368.125C370 132.875 390.75 48 416 48C442.5 48 464 141.125 464 256S442.5 464 416 464C394.625 464 376.625 403.5 370.375 320H321.875C328 418.125 350.875 512 416 512C459.75 512 512 467.625 512 256C512 139.25 495.375 0 416 0ZM272.125 96C298.625 96 320.125 74.5 320.125 48S298.625 0 272.125 0S224.125 21.5 224.125 48S245.625 96 272.125 96ZM126.125 316.875L106.25 363.125C105 366.125 102.125 368 99 368H24C10.75 368 0 378.75 0 392S10.75 416 24 416H99C121.375 416 141.625 402.625 150.5 382L164 350.5L154.5 344.625C143 337.625 133.375 328.125 126.125 316.875Z" })
  }
));
PersonToPortalRegular.displayName = "PersonToPortalRegular";
var PersonToPortal_default = PersonToPortalRegular;
