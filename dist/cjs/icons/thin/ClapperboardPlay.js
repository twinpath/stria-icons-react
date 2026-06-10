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
var ClapperboardPlay_exports = {};
__export(ClapperboardPlay_exports, {
  default: () => ClapperboardPlay_default
});
module.exports = __toCommonJS(ClapperboardPlay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClapperboardPlayThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M205.531 412.496C209.557 414.795 214.088 416 218.666 416C223.809 416 228.797 414.512 233.088 411.697L339.666 342.785C347.383 337.809 352 329.285 352 319.996S347.383 302.184 339.65 297.195L233 228.238C228.811 225.486 223.828 224 218.684 224C214.104 224 209.578 225.197 205.592 227.463C197.186 232.289 192 241.307 192 251.027V388.965C192 398.686 197.186 407.701 205.531 412.496ZM208 251.027C208 247.018 210.104 243.322 213.5 241.371C215.107 240.459 216.898 240 218.684 240C220.65 240 222.609 240.555 224.312 241.674L330.979 310.643C334.104 312.658 336 316.191 336 319.996S334.104 327.334 330.979 329.35L224.312 398.318C222.604 399.439 220.625 400 218.666 400C216.896 400 215.104 399.537 213.5 398.621C210.104 396.67 208 392.973 208 388.965V251.027ZM448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM448 48C451.883 48 455.607 48.588 459.225 49.463L348.688 160H219.312L331.312 48H448ZM308.688 48L196.688 160H67.312L179.312 48H308.688ZM16 96C16 69.533 37.533 48 64 48H156.688L44.688 160H16V96ZM496 416C496 442.467 474.467 464 448 464H64C37.533 464 16 442.467 16 416V176H496V416ZM496 160H371.312L474.975 56.338C487.65 64.988 496 79.531 496 96V160Z" })
  }
));
ClapperboardPlayThin.displayName = "ClapperboardPlayThin";
var ClapperboardPlay_default = ClapperboardPlayThin;
